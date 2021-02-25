
// this just handles style distribution for the button render factory 
export const getStyle = (char) => {
    switch (char) {
        case 'E':
            return "EnterButton"
            break;

        case '1': case '2': case '3':
        case '4': case '5': case '6':
        case '7': case '8': case '9':
            return 'KeyPad'
    
        default:
            return "Button"
            break;
    }
}


// modifies some values to display prettier 
export const getDisplay = (char) => {
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

