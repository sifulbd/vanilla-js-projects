// calling debaounce fundtion for delay retquest when typing
const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
}; 
