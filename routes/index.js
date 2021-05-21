const express = require('express');
const router = express.Router();
const articleRouter = require('./article.routes');
const userRouter = require('./user.routes');

router.get('/', (req, res) => {
  res.json({
    message: "Connecting Success"
  })
})

router.use('/article', articleRouter)
router.use('/user', userRouter)

module.exports = router