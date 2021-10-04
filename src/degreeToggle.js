import React from "react";

const Toggle = (props) => {
    return (
        <div className="degree-toggle">
    
            <input 
            className="switch" 
            name="degree-toggle"
            type="radio" 
            value="celcius" 
            id="celcius"
            onChange={props.updateDegree} />
             <label className="toggle-label" htmlFor="celcius">Celcius</label>

            <input 
                className="switch" 
                name="degree-toggle"
                type="radio" 
                value="farenheit" 
                id="farenheit"
                // checked="farenheit"
                onChange={props.updateDegree} />
                <label className="toggle-label" htmlFor="farenheit">Fahrenheit</label>
           
        </div>
    )
}

export default Toggle;