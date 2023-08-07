const express = require('express')
const app = express()
const port = process.env.PORT || 3500
const connectDB = require('../backend/db/dbConn')
const mongoose = require('mongoose')

connectDB()

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Server is LIVE')
})
//
app.use('/', require('../routes/root'))
app.use('/users', require('../routes/userRoutes'))
app.use('/auth', require('../routes/authRoutes'))
//
mongoose.connection.once('open', () => {
  console.log("Let's roll with MONGOOSE!")
  app.listen(port, () => console.log(`Listening on PORT ${port}`))
})

mongoose.connection.on('err', err => {
  console.log(err)
})
