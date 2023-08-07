const User = require('../db/models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
//
//------------------------------------------------- GET ALL
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean()
  if (!users?.length)
    return res.status(400).json({ message: 'No active users found' })

  res.json(users)
})
//------------------------------------------------- CREATE NEW
const createNewUser = asyncHandler(async (req, res) => {
  const { fullname, username, password } = req.body
  //
  if (!fullname || !username || !password)
    return res.status(400).json({ message: 'All creds required asshole' })
  //
  const duplicate = await User.findOne({ username }).lean().exec()
  if (duplicate)
    return res
      .status(409)
      .json({ message: 'Duplicate username, please choose another' })
  //
  const hashedPassword = await bcrypt.hash(password, 10)
  //
  const newUserObject = { fullname, username, password: hashedPassword }
  //
  const user = await User.create(newUserObject)
  if (user)
    return res.status(201).json({ message: `New user ${username} created` })
})

module.exports = { getAllUsers, createNewUser }
