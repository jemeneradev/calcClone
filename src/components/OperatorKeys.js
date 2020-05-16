import React from 'react';

function OKeyPad(props) {
    let addOnStyle;
    if (props.addOnStyle === undefined) {
      addOnStyle = "";
    } else {
      addOnStyle = props.addOnStyle;
    }
    let useStyle = `p-0 flex-grow-1 ${addOnStyle}`;
    return (
      <div
        id={props.id}
        className={useStyle}
        onClick={props.append.bind(this, props.keypadName)}
      >
        <div className="d-flex justify-content-center">{props.keypadName}</div>
      </div>
    );
  }
  function Operations(props) {
    return (
      <div className="p-0 flex-fill">
        <OKeyPad
          id="divide"
          addOnStyle="kdefault obutton"
          keypadName="/"
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