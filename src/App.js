import React, {useState} from 'react';
import Weather from './Weather';
import Search from './Search';
import Forecast from './forecast';


const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {

      try {
        const endpoint = `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`;
        const res = await fetch(endpoint);

        const json = await res.json();
        setWeather(json);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
  }
}

  const handleSearch = (data) => (
    setQuery(data)
  )

  const getForecast = async () => {

      try {
        const url = `${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`;
        const res = await fetch(url);

        const json = await res.json();
        console.log(json);
      } catch (error) {
        console.log(error);
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
        <Search 
          search={search} 
          handleSearch={handleSearch}
          data={query}/>
        <Weather weather={weather}/>
        <Forecast getForecast={getForecast}/>
      </main>
    </div>
  );
}

export default App;
