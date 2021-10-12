import React from "react";
import suncon from './assets/suncon.png';
import cloudycon from './assets/cloudycon.png';
import snowcon from './assets/snowcon.png';
import lightningcon from './assets/lightningcon.png';
import heavyraincon from './assets/heavyraincon.png';
import smokecon from './assets/smokecon.png';
import lightraincon from './assets/lightraincon.png';
const moment = require('moment');

const Card = (props) => {

  

    // Set names for weather icons
    const weathericons = {
        "Clouds" : cloudycon,
        "Clear" : suncon,
        "Drizzle" : lightraincon, 
        "Rain" : heavyraincon,
        "Thunderstorm" : lightningcon,
        "Smoke" : smokecon,
        "Snow" : snowcon
    };
   
    // const weekday = props.day;
    // const options = { 
    //     weekday: 'long', 
    //     year: 'numeric', 
    //     month: 'long', 
    //     day: 'numeric' 
    // };

    // const date = new Date(weekday.dt_txt);

    let newDate = new Date();
    const weekday = props.day.dt * 1000;
    newDate.setTime(weekday);

    return (
     
        <>
            <img src={weathericons[props.day.weather[0].main.toString()]} alt="Sun" />
            <p>{moment(newDate).format('dddd')}</p>
            <p className="temp">
                {props.degreeToggle === "farenheit" ? `${Math.round(props.day.main.temp)}°F`
                    : `${Math.round((props.day.main.temp - 32) * 5/9)}°C` }
                </p>
            <p>{props.day.weather[0].main}</p>

        </>
    )
}

export default Card;