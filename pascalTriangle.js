let n = 5;
let result = [];
for (let i = 0; i < n; i++) {
  let arr = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      arr.push(1);
    } else if (j === i) {
      arr.push(1);
    } else {
      let previousRow = result[i - 1];
      let sum = previousRow[j - 1] + previousRow[j];
      arr.push(sum);
    }
  }  
  result.push(arr);
}
console.log(result);