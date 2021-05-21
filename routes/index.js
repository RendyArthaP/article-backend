const express = require('express');
const router = express.Router();
const articleRouter = require('./article.routes');

router.get('/', (req, res) => {
  res.json({
    message: "Connecting Success"
  })
})

router.use('/article', articleRouter)

module.exports = router