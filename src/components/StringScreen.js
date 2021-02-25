
import '../App.css'
import React, {useContext} from 'react'
import CalcContext from '../calcContext'

const StringScreen = () => {
    const context = useContext(CalcContext)


    return (
  
      <div className="StringScreen" >
        <p className="StringTextBox">
            {
              (context.resultFlag == 1)?
              context.result
              :
              context.statement  
            }
        </p>
      </div>
  
    );
  }
  
  export default StringScreen;
