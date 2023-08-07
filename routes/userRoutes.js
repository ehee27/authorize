const express = require('express')
const router = express.Router()
const userController = require('../backend/controllers/usersController')

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .put()
  .delete()
module.exports = router
