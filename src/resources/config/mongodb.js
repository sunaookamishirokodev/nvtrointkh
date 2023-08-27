const mongoose = require('mongoose')
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/NVTSchool', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB Connect Successfully')
  } catch (error) {
    console.log('MongoDB Connect Failure')
  }
}

module.exports = { connect }