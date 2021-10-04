import React, {useState} from 'react';
import Weather from './Weather';
import Search from './Search';
import Card from './Card';
import Forecast from './forecast';
import Toggle from './degreeToggle';


const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [allData, setAllData] = useState([]);
  const [degreeToggle, setDegreeToggle] = useState('farenheit');

  const search = async (e) => {
    if (e.key === 'Enter') {

      try {
        const endpoint = `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`;
        const res = await fetch(endpoint);

        const json = await res.json();
        setWeather(json);
        setAllData([]);
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
      const data =  await res.json();
      const selectList = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
      setAllData(selectList);
      console.log(selectList);

    } catch (error) {
      console.log(error);
    }
      }

  const formatDays = () => {
    return allData.map((day, index) => <div className="forecast-day" key={index}><Card day={day}/></div>)
  }

  const updateDegree = (e) => {
    console.log(e.target.value);

  }

  return (
    <div className={
      (typeof weather.main != 'undefined') 
        ? 
        ((weather.main.temp > 32) ? 'app warm' : 'app') 
        : 'app'
          }
      >
      <main>
        <Search 
          search={search} 
          handleSearch={handleSearch}
          data={query}/>
        <Weather weather={weather}/>
        <Toggle updateDegree={updateDegree} degree={degreeToggle} />
        {Object.keys(weather).length !== 0 ? <Forecast getForecast={getForecast}/> : ''}
        
        <div className="forecast">{formatDays()}</div>
       
      </main>
    </div>
  );
}

export default App;
