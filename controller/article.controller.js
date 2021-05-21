const { Article } = require('../models/')

module.exports = {
  getArticle: async(req, res) => {
    const article = await Article.find({}, "-_v")

    try {
      res.status(200).json({
        message: "Get article success",
        data: article
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getArticleByUser: async(req, res) => {
    const userID = req.params.user_id
    const article = await Article.find({
      "user_id": userID
    }).populate("article", "-_v")

    try {
      res.status(200).json({
        message: "Get article by user",
        data: article
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getArticleByID: async(req, res) => {
    const ids = req.params.id
    const article = await Article.findById(ids)

    try {
      res.status(200).json({
        message: "Get article by ID",
        data: article
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  addArticle: async(req, res) => {
    let article = await Article.findOne({
      user_id: req.body.user_id
    })
    if(article) {
      article.listArticle.push(req.body.article)
      article.save()
    } else {
      article = await Article.create(req.body)
      article.listArticle.push(req.body.article)
      article.save()
    }

    try {
      res.status(200).json({
        message: "Input article success",
        data: article
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  updateArticle: async(req, res) => {
    const ids = req.params.id
    const inputUpdateArticle = req.body

    try {
      await Article.findByIdAndUpdate(ids, inputUpdateArticle)
      res.status(200).json({
        message: "Update article success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  deleteArticle: async(req, res) => {
    const ids = req.params.id

    try {
      await Article.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete article success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  }
}