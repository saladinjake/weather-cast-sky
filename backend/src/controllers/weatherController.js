const { getMockWeather } = require('../services/weatherService');

// @desc  Get weather for a city
// @route GET /api/weather/:city
const getWeatherByCity = (req, res) => {
  try {
    const { city } = req.params;
    if (!city) {
      return res.status(400).json({ message: 'City is required' });
    }
    const weatherData = getMockWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getWeatherByCity };
