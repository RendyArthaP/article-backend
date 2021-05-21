const express = require('express');
const router = express.Router()

const {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser
} = require('../controller/user.controller');

router.get('/', getUser)
router.get('/:id', getUserById)
router.post('/', postUser)
router.put('/:id', updateUser)
router.deleteUser('/:id', deleteUser)

module.exports = router