// src/components/Weather.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherActions';
import './weather.css'; // Optional styling for the weather component

const Weather = () => {
    const [city, setCity] = useState(''); // Local state for the city input
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.weather.data);
    const loading = useSelector(state => state.weather.loading);
    const error = useSelector(state => state.weather.error);

    useEffect(() => {
        // Fetch the default weather data for London on component mount
        dispatch(fetchWeather('London'));
    }, [dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (city) {
            dispatch(fetchWeather(city)); // Fetch weather for the city entered
            setCity(''); // Clear the input after searching
        }
    };

    return (
        <div className="weather-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
