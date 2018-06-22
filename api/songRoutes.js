const songRoute = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const {Readable} = require('stream');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'SongDB';
const songs = require('../api/performances/music.json');

let db;
MongoClient.connect(url, (err, client) => {
    console.log("Connection to the database successful!");
    db = client.db(dbName);
    // findDocuments(db,() => client.close());
});

// songList api/songs
songRoute.get('/').get((req, res) => {
    res.json(songs);
});


// GET api/songs/:trackID
songRoute.get('/:trackID', (req, res) => {
    let trackID;
    try {
        trackID = new ObjectID(req.params.trackID);
    } catch(err) {
        return res.status(400).json({ message: "Invalid trackID in URL parameter.  Must be a single String of 12 bytes or a string of 24 hex characters" }); 
    }
    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');

    let bucket = new mongodb.GridFSBucket(db,{
        bucketName: 'songs'
    });

    let downloadStream = bucket.openDownloadStream(trackID);

    downloadStream.on('data', (chunk) => {
        res.write(chunk);
    });
    downloadStream.on('error', () => {
        res.sendStatus(404);
    });
    downloadStream.on('end', () => {
        res.end();
    });
});
// POST to api/songs
songRoute.post('/', (req, res) => { 
    const storage = multer.memoryStorage();
    const upload = multer({
        storage: storage,
        limits: {
            fields: 1,
            fileSize: 6000000,
            files: 1,
            parts: 2
        }
    });
    upload.single('song')(req, res, (err) => {
        if(err) {
            return res.status(400).json({message: "Upload Request Validation Failed."});
        } else if (!req.body.name) {
            return res.status(400).json({message: "No song name in request body."});
        }
        let songName = req.body.name;
        
        // convert buffer to Readable Stream
        const readableSongStream = new Readable();
        readableSongStream.push(req.file.buffer);
        readableSongStream.push(null);

        let bucket = new mongodb.GridFSBucket(db, {
            bucketName: 'songs'
        });
        let uploadStream = bucket.openUploadStream(songName);
        let id = uploadStream.id;
        readableSongStream.pipe(uploadStream);

        uploadStream.on('error', () => {
            return res.status(500).json({message: "Error uploading file"});
        });
        uploadStream.on('finish', () => {
            return res.status(201).json({message: `File uploaded successfully, stored under Mongo ObjectID: ${id}`});
        })
    });
});

module.exports = songRoute;