const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
 
    postId: { type: String, required: true },
    userId: { type: String, required: false },
    content: { type: String, required: false },
    likes: { type: Array, default: []},
    numberOfLikes: { type: Number, default: 0 }
}, {
  timestamps: true
} ,

)
module.exports = mongoose.model('Comment', commentSchema)