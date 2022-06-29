function App() {
  return (
    //CSS grid
    <div className="calculator-grid">
        {/* black section of the calculator for outputs */}
        <div className="output">
            {/* preview of what you are typing */}
            <div className="previous-operand"></div>
            {/* what you are are currently typing */}
            <div className="current-operand"></div>
        </div>
        {/* buttons in the css grid */}
        {/* first row */}
        <button className="span-two">AC</button>
        <button>DEL</button>
        <button>÷</button>

        {/* second row */}
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>

        {/* third row */}
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>

        {/* fourth row */}
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>

        {/* last row */}
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
    </div>

  )
}

export default App
