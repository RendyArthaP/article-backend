const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  article_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "article"
  },
  username: {
    type: String,
    require: true
  },
  comment: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Comment = mongoose.model('comment', CommentSchema)
module.exports = Comment