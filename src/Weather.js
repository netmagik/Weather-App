import React from 'react';
import { dateBuilder } from './helpers';

const Weather = (props) => (
    (typeof props.weather.main != 'undefined') 
    ? ( <div>
        <div className="location-box">
          <div className="location">
            {props.weather.name}, {props.weather.sys.country}
            <div className="date">
             {dateBuilder(new Date())}
            </div>
          </div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(props.weather.main.temp)}°F
          </div>
          <div className="highlow">
            <div className="high">
              H: {Math.round(props.weather.main.temp_max)}°F
            </div>
            <div className="low">
              L: {Math.round(props.weather.main.temp_min)}°F
            </div>
          </div>
          <div className="weather">
            {props.weather.weather[0].main}
          </div>
        </div>
        </div>
        ) : ('')
)

export default Weather;