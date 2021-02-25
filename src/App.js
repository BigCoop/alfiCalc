import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import React, {useState} from 'react';
import {CalcContextProvider} from './calcContext'
import './calcContext'

const App = () => {

  // const testString = "2 + (10**2)/8"
  // const output = eval(testString);
  const [statement, setStatement] = useState('')
  const [isResult, setIsResult] = useState(0)
  const [result, setResult] = useState('')

  let value = {
    statement: statement,
    setStatement: (str) => {setStatement(str)},
    resultFlag: isResult,
    setResultFlag: (bool)=>{setIsResult(bool)},
    result: result,
    setResult: (res) => {setResult(res)}

  }


  
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



// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>






