const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num >0).map(x = x * x);
    return squaredInt;
};

const squaredInteger = squareList(realNumberArray);
console.log(squaredInteger);