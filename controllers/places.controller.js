const createError = require('http-errors');
const mongoose = require('mongoose');
const Place = require('../models/places.model');


module.exports.create = (req, res, next)=> {
    const place = new Place();

    res.render('new')
}


module.exports.doCreate = (req, res, next)=> {
    const place = new Place(req.body);
    
    console.log(place)

    place.save()
    .then(()=> res.redirect(`/`))
    .catch((error)=>{
        if (error instanceof mongoose.Error.ValidationError){
            res.render('/new')
        } else {
            res.send(error)
        }
    })
}



