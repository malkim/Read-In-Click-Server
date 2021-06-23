const mongoose = require('mongoose')


const wordSchema = new mongoose.Schema({
    kind: {
        type: String,
        require: true
    },
    words: {
        type: String = [],
        require: true
    }
})

module.exports = mongoose.model('Word', wordSchema);