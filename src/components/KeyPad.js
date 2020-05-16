import React from 'react';
import FunctionKeys from './FunctionKeys'
import NumeralKeys from './NumeralKeys'
import OperatorKeys from './OperatorKeys'

function KeyPad(props) {
    return (
      <div id="keypad" className="p-2 flex-fill">
        <div className="d-flex justify-content-between flex-row">
          <div id="main_pad" className="p-0 flex-fill" style={{ width: "200px" }}>
            <div className="d-flex flex-column">
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