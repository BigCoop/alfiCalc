

export const evaluate = (str) => {
    try {
        return eval(str)
    } 
    catch (error) {
        return 'Invalid Expression'
    }
}