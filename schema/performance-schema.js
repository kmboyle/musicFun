const mongoose = require('mongoose');

const performanceSchema = mongoose.Schema ({
    title: String,
    src: String,
    date: String,
    id: Number
})
module.exports = mongoose.model('Performance', performanceSchema);
