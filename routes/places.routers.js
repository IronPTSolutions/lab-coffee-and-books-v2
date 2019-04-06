const express = require('express')
const router = express.Router()
const placesController = require('../controllers/places.controller')

router.get('/', placesController.main)
router.get('/new', placesController.new )

router.post('/', placesController.create);

//router.post('')

module.exports = router
