import React from 'react';
import FunctionKeys from './FunctionKeys'
import NumeralKeys from './NumeralKeys'
import OperatorKeys from './OperatorKeys'

function KeyPad(props) {
    return (
      <div id="keypad" className="p-2 flex-fill">
        <div className="">
          <div id="main_pad" className="" style={{ width: "200px" }}>
            <div className="">
              <FunctionKeys calcReset={props.resetAcc}></FunctionKeys>
              <NumeralKeys append={props.appendToAcc}></NumeralKeys>
            </div>
          </div>
          <div id="operations" className="p-0 flex-fill">
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