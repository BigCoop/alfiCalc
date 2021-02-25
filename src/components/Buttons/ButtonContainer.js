
import '../../App.css'

const ButtonContainer = () => {
    const buttonString = '123()456^X789+-C0BP÷E'

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



    const buttonarray = (() => {
       return [...buttonString].map(character => {
            let style = getStyle(character)
            let display = getDisplay(character)
            return (
                <button className={style}>
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