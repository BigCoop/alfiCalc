
const ProximalIsNumber = (arr, ind, prox) => {
    switch (arr[ind + prox]) {
        case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':
            return true;
            break;
    
        default:
            return false;
    }

}

export const clean = (str) => {
    let statementArr = str.split('');
    let indexHolder = [];
    for (let index = (statementArr.length-1); index > -1; index--) {
        const element = statementArr[index];
        if (checkLegal(element) != null){
            statementArr[index] = checkLegal(element)
        }
        if (element ==')' && ProximalIsNumber(statementArr, index, 1)) {
            // indexHolder.shift(index)
            statementArr.splice((index + 1), 0, '*')
        }
        if (element == '(' && ProximalIsNumber(statementArr, index, -1)) {
            // indexHolder.shift(index)
            statementArr.splice((index), 0, '*')
        } 


        // indexHolder.forEach(index => {
        //     if (statementArr[index] == '(' && ProximalIsNumber(statementArr, index, -1)) {
        //         statementArr.splice(index, 0, '*')
        //     } 
        //     if (element ==')' && ProximalIsNumber(statementArr, index, 1)) {
        //         statementArr.splice((index + 1), 0, '*')
        //     }
        // });
        
    }

    return statementArr.join('')
}

// '123()456^X789+-C0BP÷E'
const checkLegal = (char) => {
    switch (char) {
        case '^':
            return '**'
            break;

        case 'X':
            return '*'
            break;
        
        case '÷':
            return '/'
            break;
    
        default:
            return null;

    }
}