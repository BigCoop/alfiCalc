
import '../App.css'
import ButtonContainer from './Buttons/ButtonContainer';
import StringScreen from './StringScreen'
import React from 'react'; 
import './../calcContext'

// nothing notable here, just a junction/container component

const Calculator = () => {



    return (
  <>

      <div className="Calculator" >
        <StringScreen/>
        <ButtonContainer/>
      </div>
  </>
    );
  }
  
  export default Calculator;