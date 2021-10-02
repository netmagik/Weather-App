import React from "react";

const Forecast = (props) => {


   return (
     <button className="getForecast" id="forecast" onClick={props.getForecast}>Get 5 Day Forecast</button>
   )
}

export default Forecast;