const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  listArticle: [
    {
      title: {
        type: String,
        required: true
      },
      date: {
        lastActiveAt: Date
      },
      description: {
        type: String,
        required: true
      }
    }
  ]
})

const Article = mongoose.model('article', ArticleSchema)
module.exports = Article