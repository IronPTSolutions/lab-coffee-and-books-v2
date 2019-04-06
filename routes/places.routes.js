const express = require('express');
const router = express.Router();
const placesController = require('../controllers/places.controller')

router.get('/',placesController.list);
router.get("/new",placesController.create);

router.post('/',placesController.docreate)

module.exports = router;