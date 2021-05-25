const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  article_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "article"
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
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