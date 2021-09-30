import React from "react";
import { dateBuilder } from "./helpers";

const Card = (props) => {
   
    const weekday = props.day;
    console.log(weekday)
    return (
        <>
     <p>{weekday.dt_txt}</p>
     <p>{Math.round(weekday.main.temp)} °F</p>
     <p>{weekday.weather[0].main}</p>
        {/* {props.days.forEach((weekday, index) => {
            <li className="forecast-date" key={index}>
                {weekday.dt_txt}
            </li>
        })} */}
    {/* <p>{dateBuilder(new Date())}</p> */}
   
    </>
    )
}

export default Card;