const mongoose = require('mongoose');

const songSchema = mongoose.Schema ({
    fileName: String,
    length: Number,
    uploadDate: Date,
    chunkSize: Number,
    owner: String
})
module.exports = mongoose.model('Song', songSchema);
