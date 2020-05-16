import React from 'react';


function FKeyPad(props) {
    let addOnStyle;
    if (props.addOnStyle === undefined) {
      addOnStyle = "";
    } else {
      addOnStyle = props.addOnStyle;
    }
    let useStyle = `p-0 flex-grow-1 ${addOnStyle}`;
    return (
      <div id={props.id} className={useStyle} onClick={props.action}>
        <div className="d-flex justify-content-center">{props.keypadName}</div>
      </div>
    );
  }
  
  function CalcFunctions(props) {
    return (
      <div className="d-flex flex-row">
        <FKeyPad
          id="clear"
          addOnStyle="p-0 flex-grow-1 kdefault cbutton"
          keypadName="C"
          action={props.calcReset}
        ></FKeyPad>
        <div className="p-0 flex-grow-1 kdefault cbutton">
          <div className="d-flex justify-content-center ">-+</div>
        </div>
        <div className="p-0 flex-grow-1 kdefault cbutton">
          <div className="d-flex justify-content-center">%</div>
        </div>
      </div>
    );
  }

  export default CalcFunctions;