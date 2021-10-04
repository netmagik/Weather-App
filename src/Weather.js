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
            { props.degreeToggle === 'farenheit' ? `${Math.round(props.weather.main.temp)}°F`
              : `${Math.round((props.weather.main.temp - 32)* 5/9)}°C` }
          </div>
          <div className="highlow">
            <div className="high">
              H: {props.degreeToggle === 'farenheit' ? `${Math.round(props.weather.main.temp_max)}°F`
                : `${Math.round((props.weather.main.temp_max - 9)* 5/9)}°C`}
            </div>
            <div className="low">
              L: {props.degreeToggle === 'farenheit' ? `${Math.round(props.weather.main.temp_min)}°F`
                : `${Math.round((props.weather.main.temp_min - 9)* 5/9)}°C`}
            </div>
          </div>
          <div className="description">
            {props.weather.weather[0].main}
          </div>
        </div>
        </div>
        ) : ('')
)

export default Weather;