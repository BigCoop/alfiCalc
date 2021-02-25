
import '../App.css'
import ButtonContainer from './Buttons/ButtonContainer';
import StringScreen from './StringScreen'
import React, {useContext} from 'react'; 
import './../calcContext'
import CalcContext from './../calcContext';

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