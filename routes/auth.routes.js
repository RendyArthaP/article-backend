const express = require('express');
const router = express.Router()

const {
  handleLogin,
  handleRegister
} = require('../controller/auth.controller.js')

router.post('/login', handleLogin)
router.post('/register', handleRegister)

module.exports = router