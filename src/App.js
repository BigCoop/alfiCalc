import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import React, {useState} from 'react';
import {CalcContextProvider} from './calcContext'
import './calcContext'

const App = () => {

  const [statement, setStatement] = useState('')
  const [isResult, setIsResult] = useState(0)
  const [result, setResult] = useState('')

  // Context State 
  let value = {
    statement: statement,
    setStatement: (str) => {setStatement(str)},
    resultFlag: isResult,
    setResultFlag: (bool)=>{setIsResult(bool)},
    result: result,
    setResult: (res) => {setResult(res)}

  }

  // application structure (UI)
  
  // components/
  //   └── Calculator.js 
  //       ├── Buttons
  //       │   └── ButtonContainer.js
  //       └── StringScreen.js
  
  return (
    <div className="App">
      <header className="App-header">

      <CalcContextProvider value={value} >
      <Calculator/>
      </CalcContextProvider>


      </header>
    </div>
  );
}

export default App;






