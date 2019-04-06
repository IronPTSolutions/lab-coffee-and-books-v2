const express = require('express');
const mongoose = require('mongoose');

const Place = require('../models/place.model');

module.exports.list = (req,res,next) => {
  res.render('places/list')
}

module.exports.create = (req,res,next) => {
  res.render('places/form')
}

module.exports.docreate = (req,res,next) =>{
  const place = new Place ({
    name:req.body.name,
    type:req.body.type,
    location:{
      type:"Point",
      coordinates:[req.body.long, req.body.lat]
    }
  })
  place.save()
  .then(()=>{res.redirect('/place')})
  .catch(error => next (error))
}
