const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// movie
const movieSchema = new Schema({
    moviename: {
        type: String,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('movieCollection', movieSchema);