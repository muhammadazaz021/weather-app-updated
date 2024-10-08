// src/redux/weatherActions.js

import axios from 'axios';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './weatherTypes';

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_WEATHER_REQUEST });
        try {
            const apiKey = 'd4c647a169ef3bf5f98671eac001109f'; // Replace with your OpenWeather API key
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            dispatch({
                type: FETCH_WEATHER_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_WEATHER_FAILURE,
                payload: error.message,
            });
        }
    };
};

