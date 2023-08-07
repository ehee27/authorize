const express = require('express')
const router = express.Router()
const authController = require('../backend/controllers/authController')

router.route('/').post(authController.login).post(authController.logout)
module.exports = router
