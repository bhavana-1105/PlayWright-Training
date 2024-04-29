let nums = [0,1,0,3,12];
const numOfZeros = nums.filter(zero => zero === 0).length;
let array = nums.filter(zero => zero !== 0); 
console.log("Non zero filtered array: " + array);
let zerosArray = Array(numOfZeros).fill(0);
console.log("Zeros array created based on number of zeros in given array: "+ zerosArray);
let result = array.concat(zerosArray);
console.log("Required resultant array: "+ result);
