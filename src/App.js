import React from 'react';
import Weather from './Weather';
import './Weather.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <div className="Weather">
        <Weather />
      </div>
    </div>
  );
}

export default App;