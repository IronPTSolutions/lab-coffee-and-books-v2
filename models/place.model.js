const mongoose = require('mongoose');
const PLACETYPES = ['coffee shop','bookstore']

const placeSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  type : {
    type: String,
    enum : PLACETYPES
  },
  location : {
    type: {type:String},
    coordinates:[Number]
  },
}, { timestamps: true });

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
