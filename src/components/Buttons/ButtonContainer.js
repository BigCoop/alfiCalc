
import '../../App.css'
import React, {useContext} from 'react';
import CalcContext from '../../calcContext';
import StringScreen from '../StringScreen';
import {clean} from '../../utilities/clean'
import { evaluate } from '../../utilities/run';
import {getStyle, getDisplay, onClick} from './buttonFuncs'


const ButtonContainer = () => {
    const buttonString = '123()456^X789+-C0BP÷E'

    let context = useContext(CalcContext)


    // onClick switch function that handles the instanital impact of each button and informs the render factory 
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
                    if (context.statement.length < 20){
                        let temp = context.statement
                        let cat = temp.concat(value)
                        context.setStatement(cat)
                    }
                    break;
                case 'C': // Clear Button
                    context.setStatement('')
                    break;
                
                case 'B': // Backspace button, the leftward arrow <-- 
                    let holder = context.statement
                    holder = holder.slice(0,-1)
                    context.setStatement(holder) 
        
                    break;
        
                case 'P': // the Parentheses button --> '()'
                    if (context.statement.length < 20){ 
                        let instance = context.statement;
                        instance += ')'
                        instance = '(' + instance;
                        context.setStatement(instance)
                    }
                    break;
                case 'E': // single letter symbol for the enter button 
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
                <>
                {!(character=='E')?
                <div className="ButtonBlocks">
                <button onClick={()=>{onClick(character)}} value={character} className={style}>
                    {display}
                </button>
                </div>
                :
                <button onClick={()=>{onClick(character)}} value={character} className={style}>
                    {display}
                </button>    
                }
                </>
            )
        })
    })()

    
    


    return (

      <div className="ButtonContainer" >
        {buttonarray}
      </div>

    );
  }
  
  export default ButtonContainer;