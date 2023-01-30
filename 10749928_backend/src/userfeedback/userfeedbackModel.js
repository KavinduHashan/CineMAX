const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// feedback
const userFeedbackSchema = new Schema({
    feedback: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('userfeedbacks', userFeedbackSchema);