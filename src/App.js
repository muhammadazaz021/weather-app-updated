// src/App.js

import React from 'react';
import Weather from './components/weather';
import './weather.css';
import './App.css';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Weather App</h1>
        <button className="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <Weather />
    </div>
  );
}

export default App;
