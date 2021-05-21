const express = require('express');
const routes = express.Router()

routes.use('/', (req, res) => {
  res.json({
    message: "Connecting Success"
  })
})

module.exports = routes