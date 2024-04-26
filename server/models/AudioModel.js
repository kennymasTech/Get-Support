//Post Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AudioSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    audioUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Audio', AudioSchema);