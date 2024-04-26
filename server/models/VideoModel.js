//Post Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VideoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    videoUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Video', VideoSchema);