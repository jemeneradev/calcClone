import React from 'react';
import FunctionKeys from './FunctionKeys'
import NumeralKeys from './NumeralKeys'
import OperatorKeys from './OperatorKeys'

import Style from '../styles/KeyPad.css'

function KeyPad(props) {
    return (
      <div id="keypad">
        <div id="simple-calc">
          <div id="main_pad">
              <FunctionKeys calcReset={props.resetAcc}></FunctionKeys>
              <NumeralKeys append={props.appendToAcc}></NumeralKeys>
          </div>
          <div id="operations">
            <OperatorKeys
              append={props.appendToFormula}
              compute={props.computeResults}
            ></OperatorKeys>
          </div>
        </div>
      </div>
    );
  }
 
export default KeyPad;