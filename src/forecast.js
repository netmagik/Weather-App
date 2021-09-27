import React from "react";

const Forecast = (props) => {
   return (
       <>
    <h1>Forecast</h1>
    <button id="forecast" onClick={props.getForecast}>5 Day Forecast</button>
    <ul className="forecast">
        <li className="forecast-day">
            <span class="forecast-temp">Temp</span>
            <span class="forecast-date">Date</span>
            <span class="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span class="forecast-temp">Temp</span>
            <span class="forecast-date">Date</span>
            <span class="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span class="forecast-temp">Temp</span>
            <span class="forecast-date">Date</span>
            <span class="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span class="forecast-temp">Temp</span>
            <span class="forecast-date">Date</span>
            <span class="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span class="forecast-temp">Temp</span>
            <span class="forecast-date">Date</span>
            <span class="forecast-desc">Description</span>
        </li>
    </ul>
    </>
   )
}

export default Forecast;