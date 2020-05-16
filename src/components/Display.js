import React from 'react';

function Display(props) {
    let display =
      props.hasResults === false
        ? `${props.formula}${props.acc}`
        : `${props.results}`;
    if (props.reset === true) {
      display = "0";
    }
    return (
      <div id="calcMonitor" className="p-3 flex-fill">
        <div
          className="d-flex justify-content-between flex-column"
          style={{ height: "80px" }}
        >
          <div id="display" class="d-flex flex-row-reverse">
            {display}
          </div>
          <div id="input" class="d-flex flex-row-reverse">
            {props.acc}
          </div>
        </div>
      </div>
    );
  }
  
  export default Display;