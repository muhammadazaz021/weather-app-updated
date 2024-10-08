import React from 'react';

const WeatherDisplay = React.memo(({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
});

export default WeatherDisplay;
