//Feet To Miles
function feetToMile(feet) {
  if(feet == 0) {
    return 0;
  }
  return feet / 5280;
}
const feet1 = feetToMile(10000);
console.log(feet1);

// Wood Calculator
function woodCalculator(chair, table, bed) {
  if(chair == 0 || table == 0 || bed == 0) {
    return 0;
  }
  if(chair == -1 || table == -1 || bed == -1) {
    return 0;
  }
  var chairCount = chair * 1;
  var tableCount = table * 3;
  var bedCount = bed * 5;
  var total = chairCount + tableCount + bedCount;
  return total;
}
const wood1 = woodCalculator(5,7,3);
console.log(wood1);

//Brick Calculator

function brickCalculator(floorNo){
  if(floorNo == 0) {
    return 0;
  }
  var sumOne = 0, sumTwo = 0, sumThree = 0;  
  for(var i = 1; i <= floorNo; i++){
    if(i <= 10){
      sumOne = sumOne + 1500;
    }        
    if (11 <= i) {
      if (i < 21) {
        sumTwo = sumTwo + 1200;
      }           
    }
      if(21 <= i){
        sumThree = sumThree + 1000;
      }       
  }
  return totalSum = sumOne + sumTwo + sumThree;         
}    
var totalBricks = brickCalculator(21);
console.log(totalBricks);

//Tiny Frineds
function tinyFriend(arrItem) {
  var max = arrItem[0];
  for(var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if(element.length < max.length) {
      max = element;
    } 
  }
  return max;
}
var arr = ['Sakib', 'MonirKhan', 'Rony', 'Sanjus', 'SharlokHomes', 'Tom'];
const tinyName = tinyFriend(arr);
console.log(tinyName);