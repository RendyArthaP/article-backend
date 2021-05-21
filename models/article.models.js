const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  description: {
    type: String,
    required: true
  }
})

const Article = mongoose.model('article', ArticleSchema)
module.exports = Article