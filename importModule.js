const {Calculations} = require('../JavaScript/module');

const obj = new Calculations();
console.log("divide: "+ obj.divide(10,5));
console.log("multiply: "+obj.multiply(15,5));

const calc = new Calculations(13, 22);
console.log("value1: "+calc.value1);
console.log("value2: "+calc.value2);