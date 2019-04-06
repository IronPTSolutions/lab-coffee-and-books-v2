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
  const place = new Place(req.body) 
  console.log(place)

  place.save()
    .then(() => res.redirect("/places"))
    .catch((error) => res.send(error))

})

