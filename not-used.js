// Disabled mongoose connection
// mongoose.connect(`${url}/${dbName}`);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open',()=> {
//     console.log('connection to the database successful.');
//     Performance.find((err,data)=>{
//         if (err) return console.error(err);
//         console.log(data);
//     });
// });

// disabled mongoDB method calls
// const insertDocuments = (db, cb) => {
//     const coll = db.collection('myNewCollection');
//     coll.insertMany([{a:1},{b:2},{c:3}], (err, result) => {
//         console.log(`Inserted 3 docs to myNewCollection collection in the myNewDatabse database`);
//         cb(result);
//     });
//}
// const findDocuments = (db, cb) => {
//     const coll = db.collection('songList');
//     coll.find({}).toArray((err, docs) => {
//         console.log(`Found the following from songList collection in the SongDB database`);
//         console.log(docs);
//         cb(docs);
//     });
// }


// app.route('/api/songs/:id').get((req,res) => {
//     const songById = songs.find(song => song.id === Number(req.params['id']));
//     res.json(songById);
// });

    // disabled formidable parsing
    // const form = new formidable.IncomingForm();
    // form.type = 'multipart';
    // form.parse(req, (err, fields, files) => {
    //     if (err) {return console.error(err)}
    //     console.log(`File Uploaded: ${files.file.path}`);
    //     util.inspect({fields: fields, files: files});
    // })
    // form.on('end', () => {
    //     res.send(201, req.body);
    // });