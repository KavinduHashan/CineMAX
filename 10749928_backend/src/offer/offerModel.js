const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('offer', offerSchema);