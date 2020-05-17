import React from 'react';
import Style from '../styles/Display.css'

function Display(props) {
    let display =
      props.hasResults === false
        ? `${props.formula}${props.acc}`
        : `${props.results}`;
    if (props.reset === true) {
      display = "0";
    }
    return (
      <div id="calcMonitor">
          <div id="display">
            <h2>{display}</h2>
          </div>
          <div id="input">
            <h2>{props.acc}</h2>
          </div>
      </div>
    );
  }
  
  export default Display;