import React from "react";
import suncon from './assets/suncon.png';
import cloudycon from './assets/cloudycon.png';
import snowcon from './assets/snowcon.png';
import lightningcon from './assets/lightningcon.png';
import heavyraincon from './assets/heavyraincon.png';
import smokecon from './assets/smokecon.png';
import lightraincon from './assets/lightraincon.png';

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
   
    const weekday = props.day;
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    const date = new Date(weekday.dt_txt);

    return (
     
        <>
            <img src={weathericons[weekday.weather[0].main.toString()]} alt="Sun" />
            <p>{date.toLocaleDateString(undefined, options)}</p>
            <p className="temp">
                {props.degreeToggle === "farenheit" ? `${Math.round(weekday.main.temp)}°F`
                    : `${Math.round((weekday.main.temp - 32) * 5/9)}°C` }
                </p>
            <p>{weekday.weather[0].main}</p>

        </>
    )
}

export default Card;