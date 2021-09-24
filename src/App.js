import React, {useState, useEffect} from 'react';

const api = {
  key: '0f98c8f94399873693a034fcff6a4818',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={
      (typeof weather.main != 'undefined') 
        ? 
        ((weather.main.temp > 16) ? 'app warm' : 'app') 
        : 'app'
          }
      >
      <main>
     <div className="search-box">
      <input type="text" 
        className="search-bar" 
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search} />
     </div>

{(typeof weather.main != 'undefined') ? (
  <div>
  <div className="location-box">
    <div className="location">
      {weather.name}, {weather.sys.country}
      <div className="date">
       {dateBuilder(new Date())}
      </div>
    </div>
  </div>
  <div className="weather-box">
    <div className="temp">
      {Math.round((weather.main.temp) * 9 / 5 + 32)}°F
    </div>
    <div className="highlow">
      <div className="high">
        H: {Math.round((weather.main.temp_max) * 9 / 5 + 32)}°F
      </div>
      <div className="low">
        L: {Math.round((weather.main.temp_min) * 9 / 5 + 32)}°F
      </div>
    </div>
    <div className="weather">
      {weather.weather[0].main}
    </div>
  </div>
  </div>
  ) : ('')}

      </main>
    </div>
  );
}

export default App;
