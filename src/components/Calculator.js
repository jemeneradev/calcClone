import React from 'react';
import Display from './Display'
import KeyPad from './KeyPad'

function Calculator(props) {
    const [accBuf, setAccBuf] = React.useState("");
    const [formula, setFormula] = React.useState("");
    const [formulaResults, setFormulaResults] = React.useState("");
    const [init, setInit] = React.useState(true);

    const [resultsExists, setResultsExists] = React.useState(false);
    const [usedDecimal, setUsedDecimal] = React.useState(false);
    const [enteredOperator, setEnteredOperator] = React.useState(false);
    const [operatorCount, setOperatorCount] = React.useState(0);

    const resetAcc = function () {
      setInit(true);
      setAccBuf("");
      setFormula("");
      setFormulaResults("");

      setResultsExists(false);
      setUsedDecimal(false);
      setEnteredOperator(false);
      setOperatorCount(0);
    };

    const appendToAcc = (val) => {
      if (init === true) {
        setInit(false);
      }
      if (enteredOperator === true) {
        setFormula(formula + accBuf);
        console.log(
          "inside",
          "formula: ",
          formula,
          " accbuf:",
          accBuf,
          "  val:",
          val
        );
        setOperatorCount(0);
      }

      const factoredAccUpdate = (v) => {
        if (enteredOperator === true) {
          setAccBuf(v);
        } else {
          setAccBuf(accBuf + v);
        }
      };

      switch (accBuf) {
        //Cannot start a number with zero, unlesss it's a decimal
        case "0": {
          if (val === ".") {
            setAccBuf("0" + val);
            setUsedDecimal(true);
          } else {
            if (val !== "0") {
              setAccBuf(accBuf + val);
            }
          }
          break;
        }
        //Start a decimal with a zero
        case "": {
          if (val === ".") {
            setAccBuf("0" + val);
            setUsedDecimal(true);
          } else {
            setAccBuf(accBuf + val); //accBuf + c
          }
          break;
        }
        //Disable ability to have multiple decimal chars
        default: {
          if (val !== ".") {
            factoredAccUpdate(val);
          } else {
            if (usedDecimal === false) {
              if (/[0-9]+/.test(accBuf)) {
                factoredAccUpdate(val);
              } else {
                factoredAccUpdate("0" + val);
              }

              setUsedDecimal(true);
            }
          }
        }
      }

      if (enteredOperator === true) {
        setEnteredOperator(false);
      }
    };

    /*Swap to a friednly mult display char*/
    function operatorSymbols(val) {
      switch (val) {
        case "x": {
          return "*";
        }
        default: {
          return val;
        }
      }
    }

    const appendToFormula = function (val) {
      if (usedDecimal === true) {
        setUsedDecimal(false);
      }

      if (resultsExists === true) {
        const temp = `${formulaResults}`;
        resetAcc();
        setFormula(temp + operatorSymbols(val));
        setEnteredOperator(true);
        setOperatorCount(1);
      } else {
        if (val === "-" || accBuf !== "") {
          switch (operatorCount) {
            case 0: {
              //first save operand
              setEnteredOperator(true);
              setFormula(formula + accBuf); //save current num
              //then and allow trying out which operator to use next
              setAccBuf(operatorSymbols(val));
              setOperatorCount(operatorCount + 1);
              break;
            }
            case 1: {
              setEnteredOperator(true);
              setFormula(formula + accBuf);
              if (val !== "-") {
                setFormula(formula.slice(0, formula.length));
              }
              setAccBuf(operatorSymbols(val));
              setOperatorCount(operatorCount + 1);
              break;
            }
            default: {
              //console.log("operatorcount:",formula,formula.slice(0, formula.length-3),val)
              setFormula(formula.slice(0, formula.length - 3));
              setAccBuf(operatorSymbols(val));
              setEnteredOperator(true);
              setOperatorCount(0);
            }
          }
        }
      }
    };

    const computeResults = function () {
      //sconst evalReplacement=Function('"use strict";return (' + obj + ')')()

      if (/[0-9]+/.test(accBuf)) {
        setFormula(formula + accBuf);
        setFormulaResults(eval(formula + accBuf));
        setResultsExists(true);
        setAccBuf("");
        setOperatorCount(0);
      } else {
        console.log("error");
      }
    };

    return (
      <div id="calculator" className="d-flex flex-column">
        <Display
          formula={formula}
          acc={accBuf}
          results={formulaResults}
          hasResults={resultsExists}
          reset={init}
        ></Display>
        <KeyPad
          appendToAcc={appendToAcc}
          appendToFormula={appendToFormula}
          computeResults={computeResults}
          resetAcc={resetAcc}
        ></KeyPad>
      </div>
    );
  }

  export default Calculator;