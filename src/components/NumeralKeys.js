import React from 'react';
import Style from '../styles/NumeralKeys.css'

function NKeyPad(props) {
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
      ><h2>{props.keypadName}</h2>
      </div>
    );
  }

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
          case 3: {
            return ({id:'three',name:`${num}`})
          }
          case 4: {
            return ({id:'four',name:`${num}`})
          }
          case 5: {
            return ({id:'five',name:`${num}`})
          }
          case 6: {
            return ({id:'six',name:`${num}`})
          }
          case 7: {
            return ({id:'seven',name:`${num}`})
          }
          case 8: {
            return ({id:'eight',name:`${num}`})
          }
          case 9: {
            return ({id:'nine',name:`${num}`})
          }
          case -1: {
            return ({id:'decimal',name:`.`})
          }
      }
  }

  function Numericals(props) {
    const keys = [7,8,9,4,5,6,1,2,3,0,-1].map(key => {
        const keyInfo = numNames(key)
        const extraStyle = (key === 0) ? "kdefault nbutton nbutton-extra-long" : "kdefault nbutton"
        return (
        <NKeyPad
            id={keyInfo.id}
            key={keyInfo.id}
            addOnStyle={extraStyle}
            keypadName={keyInfo.name}
            append={props.append}
            ></NKeyPad>
        )
    })
    return (
      <div className="numeral-keys-display">
          {keys}
      </div>
    );
  }
  
  export default Numericals;