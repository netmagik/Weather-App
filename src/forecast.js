import React from "react";

const Forecast = (props) => {
   return (
       <>
    <h1>Forecast</h1>
    <button id="forecast" onClick={props.getForecast}>5 Day Forecast</button>
    </>
   )
}

export default Forecast;