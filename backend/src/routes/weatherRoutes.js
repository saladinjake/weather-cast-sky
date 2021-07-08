const express = require('express');
const router = express.Router();
const { getWeatherByCity } = require('../controllers/weatherController');

router.route('/:city').get(getWeatherByCity);

module.exports = router;
