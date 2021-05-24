const express = require('express');
const router = express.Router()

const {
  handleLogin,
  handleRegister,
  handleUser
} = require('../controller/auth.controller.js')

router.post('/login', handleLogin)
router.post('/register', handleRegister)
router.post('/user', handleUser)

module.exports = router