const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
ObjectId = require('mongodb').ObjectId;
const { Readable } = require('stream');
multer = require('multer');
fs = require('fs');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getSongs = (req, res) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user.songs) {
            user.songs = [];
        }
        const bucket = new db.mongoose.mongo.GridFSBucket(
            db.mongoose.connection.db, { bucketName: req.userId});
        
        bucket.find().toArray((err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    })
};

exports.getSong = (req, res) => {
    let trackID;
    try {
        trackID = new ObjectId(req.params.trackID);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Invalid trackID in URL parameter.  Must be a single String of 12 bytes or a string of 24 hex characters" });
    }
    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');

    const bucket = new db.mongoose.mongo.GridFSBucket(db.mongoose.connection.db, {
        bucketName: req.userId
    });

    let downloadStream = bucket.openDownloadStream(trackID);

    downloadStream.on('data', (chunk) => {
        return res.write(chunk);
    });
    downloadStream.on('error', () => {
        return res.sendStatus(404);
    });
    downloadStream.on('end', () => {
        return res.end();
    });
};

exports.postSong = (req, res) => {
    const storage = multer.memoryStorage();
    const upload = multer({
        storage: storage,
        limits: {
            fields: 1,
            fileSize: 15000000,
            files: 1,
            parts: 2
        }
    });
    upload.single('song')(req, res, (err) => {
        if (err) {
            let message = "Upload Request Validation Failed.";
            if (req.headers["content-length"] > upload.limits["fileSize"]) {
                message = "File exceeds 15mb limit."
                return res.status(400).json({ message: message});
            }
            return res.status(400).json({ message: message });
        } else if (!req.body.name) {
            return res.status(400).json({ message: "No song name in request body." });
        }
        let songName = req.body.name;

        // convert buffer to Readable Stream
        const readableSongStream = new Readable();
        readableSongStream.push(req.file.buffer);
        readableSongStream.push(null);

        const bucket = new db.mongoose.mongo.GridFSBucket(
            db.mongoose.connection.db, { bucketName: req.userId});

        let uploadStream = bucket.openUploadStream(songName);
        let id = uploadStream.id;
        readableSongStream.pipe(uploadStream);

        uploadStream.on('error', (err) => {
            return res.status(500).json({ message: "Error uploading file" });
        });
        uploadStream.on('finish', () => {
            User.findByIdAndUpdate(req.userId,
                {"$push": {"songs": id}},
                {"new": true, "upsert": true},
                (err, usr) => { if (err) throw err;}
                );
            return res.status(201).json({ message: `File uploaded successfully, stored under Mongo ObjectID: ${id}` });
        })
    });
};

exports.deleteSong = (req, res) => {
   
    let trackID;
    try {
        trackID = new ObjectID(req.params.trackID);
    } catch (err) {
        return res.status(400).json({ message: "Invalid trackID in URL parameter.  Must be a single String of 12 bytes or a string of 24 hex characters" });
    }

    const bucket = new db.mongoose.mongo.GridFSBucket(
        db.mongoose.connection.db, { bucketName: req.userId});

    bucket.delete(trackID, err => {
        if (err) {
            return res.status(500).json({ message: `Error deleting file: ${err}` });
        }
        return res.status(200).json({ message: `File of ObjectID: ${trackID} deleted successfully.` });
    });
}