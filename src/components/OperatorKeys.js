import React from 'react';

function OKeyPad(props) {
    let addOnStyle;
    if (props.addOnStyle === undefined) {
      addOnStyle = "";
    } else {
      addOnStyle = props.addOnStyle;
    }
    let useStyle = `${addOnStyle}`;
    return (
      <div
        id={props.id}
        className={useStyle}
        onClick={props.append.bind(this, props.keypadName)}
      >
        <h2>{props.keypadName}</h2>
      </div>
    );
  }
  function Operations(props) {
    return (
      <div className="operator-key-display">
        <OKeyPad
          id="divide"
          addOnStyle="kdefault obutton"
          keypadName="÷"
          append={props.append}
        ></OKeyPad>
        <OKeyPad
          id="multiply"
          addOnStyle="kdefault obutton"
          keypadName="x"
          append={props.append}
        ></OKeyPad>
        <OKeyPad
          id="subtract"
          addOnStyle="kdefault obutton"
          keypadName="-"
          append={props.append}
        ></OKeyPad>
        <OKeyPad
          id="add"
          addOnStyle="kdefault obutton"
          keypadName="+"
          append={props.append}
        ></OKeyPad>
        <OKeyPad
          id="equals"
          addOnStyle="kdefault obutton"
          keypadName="="
          append={props.compute}
        ></OKeyPad>
      </div>
    );
  }
  
  export default Operations;