import React, {useState} from 'react';
import Weather from './Weather';
import Search from './Search';
import Card from './Card';
import Forecast from './forecast';


const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [allData, setAllData] = useState([]);

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

  const getForecast = () => {
        const url = `${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`;
        fetch(url)
        // const days = [];
        .then(res => res.json())
        .then(data => {
          const selectList = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
          setAllData(selectList);
        })
        
        
        
        // for (let i = 0; i < selectList.length; i += 8) {
        //   days.push((new Date(selectList[i+5].dt_txt)).toDateString());
        //   days.push(Math.round(selectList[i].main.temp));
        //   days.push(selectList[i].weather[0].description);
        //   console.log(days)
        //   setAllData(days.slice(-3));
        // }
        // return days.slice(-3);
        
      }
  

  const formatDays = () => {
    console.log(allData)
    return allData.map((day, index) => <Card day={day} key={index} />)
  
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
        {formatDays()}
        <Forecast getForecast={getForecast}/>
      </main>
    </div>
  );
}

export default App;
