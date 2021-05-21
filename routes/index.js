const express = require('express');
const router = express.Router();
const articleRouter = require('./article.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');

router.get('/', (req, res) => {
  res.json({
    message: "Connecting Success"
  })
})

router.use('/article', articleRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)

module.exports = router