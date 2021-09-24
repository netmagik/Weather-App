import React, {useState, useEffect} from 'react';
import Weather from './Weather';

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

<Weather weather={weather}/>

      </main>
    </div>
  );
}

export default App;
