const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a name'],
    },
    text: {
      type: String,  default: "" },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    avatar: { type: String },

   // role: { type: Number, default: 0, },
    isAdmin: {
      type: Boolean,
      default: false
    },
 
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
