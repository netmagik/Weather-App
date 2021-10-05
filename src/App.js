import React, {useState, useEffect} from 'react';
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
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
  
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        })
  
        try {
          const url = `${api.base}weather?lat=${lat}&lon=${long}&units=imperial&APPID=${api.key}`;
          const res = await fetch(url);
          const json = await res.json();
          setWeather(json);
  
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
  }, [lat, long]);


  const search = async (e) => {
    if (e.key === 'Enter') {

      try {
        const endpoint = `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`;
        const res = await fetch(endpoint);

        const json = await res.json();
        setWeather(json);
        setAllData([]);
      } catch (error) {
        console.log(error);
      }
  }
}

  const handleSearch = (data) => (
    setQuery(data)
  )

  const getForecast = async () => {
    if (query !== '') {
      try {
        const url = `${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`;
        const res = await fetch(url);
        const data =  await res.json();
        const selectList = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
        setAllData(selectList);
  
      } catch (error) {
        console.log(error);
      }
    } else {
        try {
          const url = `${api.base}forecast?lat=${lat}&lon=${long}&units=imperial&APPID=${api.key}`;
          const res = await fetch(url);
          const data =  await res.json();
          const selectList = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
          setAllData(selectList);
    
        } catch (error) {
          console.log(error);
      }
    }
   
      }

  const formatDays = () => {
    return allData.map((day, index) => <div className="forecast-day" key={index}><Card degreeToggle={degreeToggle} day={day}/></div>)
  }

  const updateDegree = (e) => {
    console.log(e.target.value);
    setDegreeToggle(e.target.value);

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
        <Weather degreeToggle={degreeToggle} weather={weather}/>
        
        {Object.keys(weather).length !== 0 && weather['cod'] != '400' ? 
        <>
        <Toggle updateDegree={updateDegree} degree={degreeToggle} />
        <Forecast getForecast={getForecast}/> 
        </> 
        : <div className="error">Enable location access in your browser settings to see local weather or enter city in the search bar</div>}
        
        <div className="forecast">{formatDays()}</div>
       
      </main>
    </div>
  );
}

export default App;
