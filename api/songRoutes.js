songRoute = require('express').Router();
ObjectID = require('mongodb').ObjectID;
const {Readable} = require('stream');
mongodb = require('mongodb');
multer = require('multer');
MongoClient = require('mongodb').MongoClient;
url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017';
dbName = 'SongDB';
songs = require('../api/performances/music.json');

let db;
MongoClient.connect(url, (err, client) => {
    console.log("Connection to the database successful!");
    db = client.db(dbName);
    // findDocuments(db,() => client.close());
});

// songList api/songs
songRoute.get('/', (req, res) => {
    let dbo; 
    MongoClient.connect(url, (err, client) => {
        console.log("Loading Songs!");
        dbo = client.db(dbName);
        const coll = dbo.collection('songs.files');
        coll.find().toArray((err,result) => {
            if (err) throw err;
            // console.log(result);
            res.json(result);
        });
    });
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
            songs.push({name: songName, ojbectID: id});
            return res.status(201).json({message: `File uploaded successfully, stored under Mongo ObjectID: ${id}`});
        })
    });
    //DELETE song /api/songs/:trackID
    songRoute.delete('/:trackID', (req, res) => {
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

    let deleteStream = bucket.delete(trackID);
    deleteStream.on('error', () => {
        return res.status(500).json({message: "Error deleting file"});
    });

    deleteStream.on('finish', () => {
        songs = songs.filter(song => song.objectID !== id);
        return res.status(201).json({message: `File of ObjectID: ${id} deleted successfully.`});
    });
    })
});

module.exports = songRoute;