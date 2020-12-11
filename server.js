config = require('./db-config.js');
http = require('http'),
    util = require('util'),
    //Install express server
    express = require('express'),
    bodyParser = require('body-parser');
    // songRoute = require('./api/songRoutes');
    // Provider = require('oidc-provider');
    songRoute = require('express').Router();
ObjectID = require('mongodb').ObjectID;
const { Readable } = require('stream');
mongodb = require('mongodb');
multer = require('multer');
MongoClient = require('mongodb').MongoClient;
fs = require('fs');
url = process.env.MONGODB_URI_ADMIN || `mongodb+srv://${config.dbUserName}:${config.dbPw}@cluster0.eaxzk.mongodb.net/${config.dbName}?retryWrites=true&w=majority'`;
const client = new MongoClient(url, { useNewUrlParser: true });

const port = process.env.PORT || 8080;

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname + '/dist')));
app.use(bodyParser.json());
// app.use('/api/songs', songRoute);
// const oidc = new Provider('http://localhost:3000');


let db;
client.connect(err => {
    if (err) { console.log(err); }
    console.log("Connection to the database successful!");
    db = client.db(config.dbName);
    // Start the app by listening on the default local or Heroku port
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
    });
    app.get('/home', (req, res) => {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
    });

    // songList api/songs
    app.get('/api/songs', (req, res) => {
        const coll = db.collection('songs.files');
        coll.find().toArray((err, result) => {
            if (err) throw err;
            // console.log(result);
            res.json(result);
        });

    });


    // GET api/songs/:trackID
    app.get('/api/songs/:trackID', (req, res) => {
        let trackID;
        try {
            trackID = new ObjectID(req.params.trackID);
        } catch (err) {
            return res.status(400).json({ message: "Invalid trackID in URL parameter.  Must be a single String of 12 bytes or a string of 24 hex characters" });
        }
        res.set('content-type', 'audio/mp3');
        res.set('accept-ranges', 'bytes');

        let bucket = new mongodb.GridFSBucket(db, {
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
    app.post('/api/songs', (req, res) => {
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
                if (err) {
                    let message = "Upload Request Validation Failed.";
                    if (req.headers["content-length"] > upload.limits["fileSize"]) {
                        message = "File exceeds 6mb limit."
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
    
                let bucket = new mongodb.GridFSBucket(db, {
                    bucketName: 'songs'
                });
                let uploadStream = bucket.openUploadStream(songName);
                let id = uploadStream.id;
                readableSongStream.pipe(uploadStream);
    
                uploadStream.on('error', () => {
                    return res.status(500).json({ message: "Error uploading file" });
                });
                uploadStream.on('finish', () => {
                    return res.status(201).json({ message: `File uploaded successfully, stored under Mongo ObjectID: ${id}` });
                })
            });
    });
    app.post('/api/songs/editSongName/:trackID', (req, res) => {
      let trackID;
      try {
          trackID = new ObjectID(req.params.trackID);
      } catch (err) {
          return res.status(400).json({ message: "Invalid trackID in URL parameter.  Must be a single String of 12 bytes or a string of 24 hex characters" });
      }
      if (!req.body.name) {
        return res.status(400).json({ message: "No song name in request body." });
    }
    let songName = req.body.name;
    let bucket = new mongodb.GridFSBucket(db, {
        bucketName: 'songs'
    });
    let uploadStream = bucket.openUploadStream(songName);
    let id = uploadStream.id;
     bucket.rename(trackID, songName, err => {
      if (err) {
       return res.status(400).json({ message: "Rename failed"});
      }
      return res.status(201).json({ message: `File stored under Mongo ObjectID: ${id} Sucessfully renamed.` });
    });
  });
    //DELETE song /api/songs/:trackID
    app.delete('/api/songs/:trackID', (req, res) => {
        let trackID;
        try {
            trackID = new ObjectID(req.params.trackID);
        } catch (err) {
            return res.status(400).json({ message: "Invalid trackID in URL parameter.  Must be a single String of 12 bytes or a string of 24 hex characters" });
        }

        const bucket = new mongodb.GridFSBucket(db, {
            bucketName: 'songs'
        });

        bucket.delete(trackID, err => {
            if (err) {
                return res.status(500).json({ message: `Error deleting file: ${err}` });
            }
            return res.status(200).json({ message: `File of ObjectID: ${trackID} deleted successfully.` });
        });
    });
});
