//Install express server
const express = require('express');
const app = express();
const path = require('path');
const songs = require('./api/performances/music.json');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// import { environment } from './src/environments/environment';
const url = 'mongodb://localhost:27017';
const dbName = 'SongDB';

MongoClient.connect(url, (err, client) => {
    console.log("Connected to db server");
    const db = client.db(dbName);
    findDocuments(db,() => client.close());
});
// const insertDocuments = (db, cb) => {
//     const coll = db.collection('myNewCollection');
//     coll.insertMany([{a:1},{b:2},{c:3}], (err, result) => {
//         console.log(`Inserted 3 docs to myNewCollection collection in the myNewDatabse database`);
//         cb(result);
//     });
//}
const findDocuments = (db, cb) => {
    const coll = db.collection('songList');
    coll.find({}).toArray((err, docs) => {
        console.log(`Found the following from songList collection in the SongDB database`);
        console.log(docs);
        cb(docs);
    });
}

// if (environment.production) {
//     // Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname + '/dist')));
// }
app.use(bodyParser.json());
app.route('/api/songs').get((req, res) => {
    res.json(songs);
});
app.route('/api/songs/:id').get((req,res) => {
    const songById = songs.find(song => song.id === Number(req.params['id']));
    res.json(songById);
});
app.route('api/songs').post((req, res) => { 
    console.log(req.body);
    res.send(201, req.body);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}`);
});