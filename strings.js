const input = 567;
//the String() function expects an argument and the toString() method is called implicitly to convert the input variable to a string.
//toString() function is explicity called
console.log(String(input), input.toString());
console.log(typeof(String(input)), typeof(input.toString()));