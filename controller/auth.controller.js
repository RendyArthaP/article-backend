const { User } = require('../models/')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')

module.exports = {
  handleLogin: async(req, res) => {
    const { name, password } = req.body
    let users = await User.findOne({name})
    const comparePassword = bcrypt.compareSync(password, users.passwordUser)

    if(users && comparePassword) {
      users = users.toObject()
      const { password, ...payload } = users
      const token = jwt.sign(payload, JWT_KEY)

      res.status(200).json({
        message: "Login Success",
        data: payload,
        token
      })
    } else {
      res.status(500).json({
        message: "Invalid email or password"
      })
    }
  },
  handleRegister: async(req, res) => {
    const users = req.body
    const hashPassword = await bcrypt.hash(users.password, 10)

    if(!hashPassword) throw new Error('Hash Password Error')

    const user = await User.create({
      ...users,
      password: hashPassword
    })

    res.status(200).json({
      message: "Register success",
      data: user
    })
  }
}