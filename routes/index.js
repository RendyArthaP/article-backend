const express = require('express');
const router = express.Router();
const articleRouter = require('./article.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const commentRouter = require('./comment.routes');

router.get('/', (req, res) => {
  res.json({
    message: "Connecting Success"
  })
})

router.use('/article', articleRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/comment', commentRouter)

module.exports = router