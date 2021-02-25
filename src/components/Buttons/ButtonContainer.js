
import '../../App.css'
import React, {useContext} from 'react';
import CalcContext from '../../calcContext';
import StringScreen from '../StringScreen';
import {clean} from '../../utilities/clean'
import { evaluate } from '../../utilities/run';


const ButtonContainer = () => {
    const buttonString = '123()456^X789+-C0BP÷E'
    // const tester = useContext(CalcContext)
    let context = useContext(CalcContext)



    const getStyle = (char) => {
        switch (char) {
            case 'E':
                return "EnterButton"
                break;
        
            default:
                return "Button"
                break;
        }
    }

    const getDisplay = (char) => {
        switch (char) {
            case 'E':
                return "Enter"
                break;
        
            case 'P':
                return "( )"
                break;        

            case 'B':
                return "←"
                break;

            default:

                break;
        }
        return char;
    }

    const onClick = (value) => {
        if (value != 'E'){
            context.setResultFlag(0)
        }

        switch (value) {
            case '1': case '2': case '3':
            case '4': case '5': case '6':
            case '7': case '8': case '9':
            case '(': case ')': case '^':
            case 'X': case '+': case '-':
            case '÷': case '0':
                 
                let temp = context.statement
                let cat = temp.concat(value)
                context.setStatement(cat)
                
                break;
            case 'C':
                context.setStatement('')
                break;
            
            case 'B':
                let holder = context.statement
                holder = holder.slice(0,-1)
                context.setStatement(holder) 

                break;

            case 'P':
                let instance = context.statement;
                instance += ')'
                instance = '(' + instance;
                context.setStatement(instance)
                break;
            case 'E':
                let result = context.statement
                result = clean(result)
                context.setResult(evaluate(result))
                context.setResultFlag(1);
                context.setStatement('')
                // eval the expression 
            default:
                break;
        }
    }


    const buttonarray = (() => {
       return [...buttonString].map(character => {

            let style = getStyle(character)
            let display = getDisplay(character)
            return (
                <button onClick={()=>{onClick(character)}} value={character} className={style}>
                    <p>{display}</p>
                </button>
            )
        })
    })()

    
    

    console.log(buttonarray)

    return (


      <div className="ButtonContainer" >
        {buttonarray}

        
      </div>

    );
  }
  
  export default ButtonContainer;