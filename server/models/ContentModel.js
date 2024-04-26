const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['video', 'audio', 'post'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  fileUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Content', contentSchema);
