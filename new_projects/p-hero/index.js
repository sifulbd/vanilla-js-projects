// function fac(n) {
//     if (n == 0) {
//         return 1;
//     }else {
//         return  n * fac(n-1); 
//     }
// }
// const fat = fac(10);
// console.log(fat);

// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[n] = fibo[n-1] + fibo[n-2];



// function reck(n) {
//     if(n == 0) {
//         return [0];
//     }
//     if(n == 1){
//         return [0,1];
//     }else {
//         var fibo = reck(n-1);
//         var nextElement = fibo[n-1] + fibo[n-2];
//         fibo.push(nextElement);
//         return  fibo;
//     }
// }
// const rec = reck(10);
// console.log(rec);

var arr = [8, 2, 3, 4];
var sum = 0;
for(let i= 0; i < arr.length; i++) {
    var element = arr[i];
    sum = sum + element;
}
console.log(sum);