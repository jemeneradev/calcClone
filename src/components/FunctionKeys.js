import React from 'react';
import Style from '../styles/FunctionKeys.css'

function FKeyPad(props) {
    let addOnStyle;
    if (props.addOnStyle === undefined) {
      addOnStyle = "";
    } else {
      addOnStyle = props.addOnStyle;
    }
    let useStyle = `${addOnStyle}`;
    return (
      <div id={props.id} className={useStyle} onClick={props.action}>
        <h2>{props.keypadName}</h2>
      </div>
    );
  }
  
/*
  const numNames = (num) => {
    switch(num){
        case 0: {
            return ({id:'zero',name:`${num}`})
        }
        case 1: {
          return ({id:'one',name:`${num}`})
        }
        case 2: {
          return ({id:'two',name:`${num}`})
        }
    }
}*/

  function CalcFunctions(props) {
    return (
      <div className="function-keys-display">
        <FKeyPad
          id="clear"
          addOnStyle="kdefault cfbutton"
          keypadName="C"
          action={props.calcReset}
        ></FKeyPad>
        <FKeyPad
          id="toggle"
          addOnStyle="kdefault cfbutton"
          keypadName="-+"
          action={null}
        ></FKeyPad>
         <FKeyPad
          id="mod"
          addOnStyle="kdefault cfbutton"
          keypadName="%"
          action={null}
        ></FKeyPad>
      </div>
    );
  }

  export default CalcFunctions;