
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: String, required: true,},
    image: {
        type: String
    },
   
    content: {
      type: String,
      required: [false, 'Please add a text value'],
    },
    title: {
      type: String,
      required: [false, 'Please add a text value'],
    },
    category: {
      type: String,
      default: 'uncategory',
      
    },
    select: {
      type: String,
      required: true,
      default: false
    },
}, {
  timestamps: true
} ,

)
module.exports = mongoose.model('Post', postSchema)