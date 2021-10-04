import React from "react";

const Toggle = (props) => {
    return (
        <div className="degree-toggle">
           
            <input 
            className="switch" 
            type="radio" 
            value="celcius" 
            id="celcius"
            onChange={props.updateDegree} />
             <label className="toggle-label" htmlFor="celcius">Celcius</label>

            <input 
                className="switch" 
                type="radio" 
                value="farenheit" 
                id="farenheit"
                onChange={props.updateDegree} />
                <label className="toggle-label" htmlFor="farenheit">Farenheit</label>
        </div>
    )
}

export default Toggle;