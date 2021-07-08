const getMockWeather = (city) => {
  const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Stormy'];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const temp = Math.floor(Math.random() * 35) + 5;
  
  const forecast = [];
  const today = new Date();
  
  for (let i = 1; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    forecast.push({
      date: date.toISOString().split('T')[0],
      tempDay: Math.floor(Math.random() * 35) + 5,
      tempNight: Math.floor(Math.random() * 20) + 0,
      condition: conditions[Math.floor(Math.random() * conditions.length)]
    });
  }

  return {
    city: city.charAt(0).toUpperCase() + city.slice(1),
    current: {
      temp,
      condition,
      humidity: Math.floor(Math.random() * 60) + 30,
      windSpeed: Math.floor(Math.random() * 40) + 5,
      pressure: 1013 + Math.floor(Math.random() * 20) - 10,
      timestamp: new Date().toISOString()
    },
    forecast
  };
};

module.exports = { getMockWeather };
