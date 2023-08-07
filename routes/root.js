const express = require('express')
const router = express.Router()
const path = require('path')

router.route('/', (rer, res) => {
  res.send('THIS IS THE ROOT')
})

module.exports = router
