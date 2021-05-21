const express = require('express');
const router = express.Router()

const {
  getArticle,
  getArticleByUser,
  getArticleByID,
  addArticle,
  updateArticle,
  deleteArticle
} = require('../controller/article.controller');

router.get('/', getArticle)
router.get('/user/:user_id', getArticleByUser)
router.get('/:id', getArticleByID)
router.post('/', addArticle)
router.put('/:id', updateArticle)
router.delete('/:id', deleteArticle)

module.exports = router