const createError = require('http-errors')
const mongoose = require('mongoose')
const Place = require('../models/place.model')

module.exports.main = ((req, res, next) => {
  res.render('main.hbs')
})

module.exports.new = ((req, res, next) => {
  res.render('places/form.hbs')
})

module.exports.create = ((req, res, next) => {
  const place = new Place({
    name: req.body.name,
    type: req.body.type,
    location: {
      type: "Point",
      coordinates: [req.body.lng, req.body.lat]
    }
  }) 
  console.log(place)

  place.save()
    .then(() => res.redirect("/places"))
    .catch((error) => res.send(error))
})
module.exports.coordinates = ((req, res, next) => {
  Place.find()
  .then(places => res.json(places.map(p => p.location)) )
  .catch(next)
})

