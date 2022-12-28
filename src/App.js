import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import Search from "./Search";
import Card from "./Card";
import Forecast from "./forecast";
import Toggle from "./degreeToggle";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [allData, setAllData] = useState([]);
  const [degreeToggle, setDegreeToggle] = useState("farenheit");
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [lat, lon]);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    try {
      const url = `/.netlify/functions/getWeather?lat=${lat}&lon=${lon}`;
      const res = await fetch(url);
      const json = await res.json();
      setWeather(json.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const endpoint = `/.netlify/functions/searchWeather?q=${query}`;
        const res = await fetch(endpoint);
        const json = await res.json();
        setWeather(json.data);
        setAllData([]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleSearch = (data) => setQuery(data);

  const getForecast = async () => {
    if (query !== "") {
      try {
        const url = `/.netlify/functions/forecastWeather?q=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        const selectList = data.data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        setAllData(selectList);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const url = `/.netlify/functions/forecastLatLon?lat=${lat}&lon=${lon}`;
        const res = await fetch(url);
        const data = await res.json();
        const selectList = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        setAllData(selectList);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formatDays = () => {
    return allData.map((day, index) => (
      <div className="forecast-day" key={index}>
        <Card degreeToggle={degreeToggle} day={day} />
      </div>
    ));
  };

  const updateDegree = (e) => {
    setDegreeToggle(e.target.value);
  };

  return (
    <div
      className={
        weather !== null && typeof weather.main !== "undefined"
          ? weather.main.temp > 32
            ? "app warm"
            : "app"
          : "app"
      }
    >
      {!loading ? (
        <main>
          <Search search={search} handleSearch={handleSearch} data={query} />

          <Weather degreeToggle={degreeToggle} weather={weather} />
          {Object.keys(weather).length !== 0 && weather["cod"] !== "400" ? (
            <>
              <Toggle updateDegree={updateDegree} degree={degreeToggle} />
              <Forecast getForecast={getForecast} />
            </>
          ) : (
            <div className="error">
              Enable location access in your browser settings to see local
              weather or enter city in the search bar
            </div>
          )}

          <div className="forecast">{formatDays()}</div>
        </main>
      ) : (
        <div className="modal">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default App;
