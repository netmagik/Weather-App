import React from "react";

const Forecast = (props) => {


   return (
       <>
    <h1>Forecast</h1>
    <button id="forecast" onClick={props.getForecast}>5 Day Forecast</button>
    <ul className="forecast">
        {/* {props.allData.map((reading, index) => {
            <li className="forecast-date">reading={}</li>
        })} */}
        {/* {props.allData.map(day =>  
            <li className="forecast-day" key={`key${Date.now()}`}>
                {day[0]}
            </li>)} */}
        {/* <li className="forecast-day">
            <span className="forecast-temp">
                {props.allData}
                Temp
            </span>
            <span className="forecast-date">Date</span>
            <span className="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span className="forecast-temp">Temp</span>
            <span className="forecast-date">Date</span>
            <span className="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span className="forecast-temp">Temp</span>
            <span className="forecast-date">Date</span>
            <span className="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span className="forecast-temp">Temp</span>
            <span className="forecast-date">Date</span>
            <span className="forecast-desc">Description</span>
        </li>
        <li className="forecast-day">
            <span className="forecast-temp">Temp</span>
            <span className="forecast-date">Date</span>
            <span className="forecast-desc">Description</span>
        </li> */}
    </ul>
    </>
   )
}

export default Forecast;