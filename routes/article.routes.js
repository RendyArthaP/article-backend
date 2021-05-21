const express = require('express');
const router = express.Router()

const {
  getArticle,
  getArticleByID,
  addArticle,
  updateArticle,
  deleteArticle
} = require('../controller/article.controller');

router.get('/', getArticle)
router.get('/:id', getArticleByID)
router.post('/', addArticle)
router.put('/:id', updateArticle)
router.delete('/:id', deleteArticle)

module.exports = router