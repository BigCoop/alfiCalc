
import '../App.css'
import React, {useContext} from 'react'
import CalcContext from '../calcContext'

const StringScreen = () => {
    const context = useContext(CalcContext)

    let stringVariable = 'fat pineapples'
    return (
  
      <div className="StringScreen" >
        <p>
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