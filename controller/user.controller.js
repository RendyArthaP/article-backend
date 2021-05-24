const { User } = require('../models');

module.exports = {
  getUser: async(req, res) => {
    const user = await User.find({}, "-_v")
    
    try {
      res.status(200).json({
        message: "Get User Success",
        data: user
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getUserById: async(req, res) => {
    const ids = req.params.id
    const user = await User.findById(ids)

    try {
      if(!user) {
        res.status(500).json({
          message: "You can't find your ID"
        })
      } else {
        res.status(200).json({
          message: "You get user by ID",
          data: user
        })
      }
    } catch(error) {
      res.status(500).send(error)
    }
  },
  getUserByName: async(req, res) => {
    const user = await User.find(
      {"name": req.params.name}
    )
    try {
      if(!user) {
        res.status(500).json({
          message: "You can't find your name user"
        })
      } else {
        res.status(200).json({
          message: "You get user by name",
          data: user
        })
      }
    } catch(error) {
      res.status(500).send(error)
    }
  },
  postUser: async(req, res) => {
    const user = await User.create(req.body)

    try {
      res.status(200).json({
        message: "Input User success",
        data: user
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },  
  updateUser: async(req, res) => {
    const ids = req.params.id
    const inputUpdateUser = req.body

    try {
      await User.findByIdAndUpdate(ids, inputUpdateUser)
      res.status(200).json({
        message: "Update Success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  },
  deleteUser: async(req, res) => {
    const ids = req.params.id

    try {
      await User.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete success"
      })
    } catch(error) {
      res.status(500).send(error)
    }
  }
}