const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        minlength: 9,
        maxlength: 9,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)