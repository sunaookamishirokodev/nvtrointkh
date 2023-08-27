const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListImage = new Schema({
  notiImg1: { type: String, maxLength: 600 },
  notiImg2: { type: String, maxLength: 255 },
  notiImg3: { type: String, maxLength: 255 },
  notiImg4: { type: String, maxLength: 255 },
  notiImg5: { type: String, maxLength: 255 },
  notiImg6: { type: String, maxLength: 255 },
  notiImg7: { type: String, maxLength: 255 },
  notiImg8: { type: String, maxLength: 255 },
  notiImg9: { type: String, maxLength: 255 },
  notiImg10: { type: String, maxLength: 255 },
  notiImg11: { type: String, maxLength: 255 },
  notiImg12: { type: String, maxLength: 255 },
})

module.exports = mongoose.model('ListImage', ListImage)