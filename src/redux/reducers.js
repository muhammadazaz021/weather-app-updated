// src/redux/reducers.js
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
    weather: weatherReducer,
    // Add more reducers here if necessary
});

export default rootReducer;
