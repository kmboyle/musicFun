const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
ObjectId = require('mongodb').ObjectId;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getSongs = (req, res) => {
    //const coll = db.collection('songs.files');
    const bucket = new db.mongoose.mongo.GridFSBucket(db.mongoose.connection.db, {
        bucketName: 'songs'
    });
    bucket.find().toArray((err, result) => {
        if (err) throw err;
        // console.log(result);
        return res.json(result);
    });
//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 8)
//   });

//   user.save((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     if (req.body.roles) {
//       Role.find(
//         {
//           name: { $in: req.body.roles }
//         },
//         (err, roles) => {
//           if (err) {
//             res.status(500).send({ message: err });
//             return;
//           }

//           user.roles = roles.map(role => role._id);
//           user.save(err => {
//             if (err) {
//               res.status(500).send({ message: err });
//               return;
//             }

//             res.send({ message: "User was registered successfully!" });
//           });
//         }
//       );
//     } else {
//       Role.findOne({ name: "user" }, (err, role) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }

//         user.roles = [role._id];
//         user.save(err => {
//           if (err) {
//             res.status(500).send({ message: err });
//             return;
//           }

//           res.send({ message: "User was registered successfully!" });
//         });
//       });
//     }
//    });
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

    // let bucket = new mongodb.GridFSBucket(db, {
    //     bucketName: 'songs'
    // });

    const bucket = new db.mongoose.mongo.GridFSBucket(db.mongoose.connection.db, {
        bucketName: 'songs'
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