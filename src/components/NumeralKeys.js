import React from 'react';

function NKeyPad(props) {
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
  
  function Numericals(props) {
    return (
      <div className="p-0 flex-fill">
        <div className="d-flex flex-row">
          <NKeyPad
            id="seven"
            addOnStyle="kdefault nbutton"
            keypadName="7"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="eight"
            addOnStyle="kdefault nbutton"
            keypadName="8"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="nine"
            addOnStyle="kdefault nbutton"
            keypadName="9"
            append={props.append}
          ></NKeyPad>
        </div>
        <div className="d-flex flex-row">
          <NKeyPad
            id="four"
            addOnStyle="kdefault nbutton"
            keypadName="4"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="five"
            addOnStyle="kdefault nbutton"
            keypadName="5"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="six"
            addOnStyle="kdefault nbutton"
            keypadName="6"
            append={props.append}
          ></NKeyPad>
        </div>
        <div className="d-flex flex-row">
          <NKeyPad
            id="one"
            addOnStyle="kdefault nbutton"
            keypadName="1"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="two"
            addOnStyle="kdefault nbutton"
            keypadName="2"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="three"
            addOnStyle="kdefault nbutton"
            keypadName="3"
            append={props.append}
          ></NKeyPad>
        </div>
        <div className="d-flex flex-row">
          <NKeyPad
            id="zero"
            addOnStyle="kdefault nbutton"
            keypadName="0"
            append={props.append}
          ></NKeyPad>
          <NKeyPad
            id="decimal"
            addOnStyle="kdefault nbutton"
            keypadName="."
            append={props.append}
          ></NKeyPad>
        </div>
      </div>
    );
  }
  
  export default Numericals;