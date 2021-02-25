
import '../App.css'
import ButtonContainer from './Buttons/ButtonContainer';
import StringScreen from './StringScreen'

const Calculator = () => {

    return (
  
      <div className="Calculator" >
        <StringScreen/>
        <ButtonContainer/>
      </div>
  
    );
  }
  
  export default Calculator;