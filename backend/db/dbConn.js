const mongoose = require('mongoose')

const connectDB = async (req, res) => {
  try {
    mongoose.connect(
      'mongodb+srv://slucas27:Mahomes22@cluster0.eothoej.mongodb.net/?retryWrites=true&w=majority'
    )
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
