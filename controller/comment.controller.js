const { Comment } = require('../models/')

module.exports = {
  getComment: async(req, res) => {
    const comments = await Comment.find({}, "-_v")

    try {
      res.status(200).json({
        message: "Get comment success",
        data: comments
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getCommentByArticle: async(req, res) => {
    const comments = await Comment.find({
      "article_id": req.params.article_id
    }).populate("article_id", "-_v")

    try {
      res.status(200).json({
        message: "Get comment by article success",
        data: comments
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getCommentById: async(req, res) => {
    const ids = req.params.id
    const comments = await Comment.findById(ids)

    try {
      res.status(200).json({
        message: "Get comment by id",
        data: comments
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  postComment: async(req, res) => {
    const comments = await Comment.create(req.body)

    try {
      res.status(200).json({
        message: "Add comment success",
        data: comments
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  updateComment: async(req, res) => {
    const ids = req.params.id
    const inputUpdateComment = req.body

    try {
      await Comment.findByIdAndUpdate(ids, inputUpdateComment)
      res.status(200).json({
        message: "Update comment success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  deleteComment: async(req, res) => {
    const ids = req.params.id

    try {
      await Comment.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete comment success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  }
}