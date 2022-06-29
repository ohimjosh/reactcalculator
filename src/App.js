import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import './styles.css'


export const ACTIONS = {
    ADD_DIGIT: `add-digit`,
    CHOOSE_OPERATION: `choose-operation`,
    CLEAR: `clear`,
    DELETE_DIGIT: `delete-digit`,
    EVALUATE: `evaluate`
}


function reducer(state, { type, payload }) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`
            }

    }



}

function App() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

  return (
    //CSS grid
    <div className="calculator-grid">
      {/* black section of the calculator for outputs */}
      <div className="output">
        {/* preview of what you are typing */}
        <div className="previous-operand">{previousOperand}{operation}</div>
        {/* what you are are currently typing */}
        <div className="current-operand">{currentOperand}</div>
      </div>
      {/* buttons in the css grid */}
      {/* first row */}
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation='÷' dispatch={dispatch} />

      {/* second row */}
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />

      {/* third row */}
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />

      {/* fourth row */}
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />

      {/* last row */}
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
