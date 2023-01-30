const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// movie
const bookingSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    moviename: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    persons: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('booking', bookingSchema);