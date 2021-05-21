const express = require('express');
const router = express.Router()

const {
  getComment,
  getCommentByArticle,
  getCommentById,
  postComment,
  updateComment,
  deleteComment
} = require('../controller/comment.controller');

router.get('/', getComment)
router.get('/article/:article_id', getCommentByArticle)
router.get('/:id', getCommentById)
router.post('/', postComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router