// Logical operators in some programming languages can indeed return non-boolean values,
// specifically when used in a context where the result can be implicitly converted to a number or when operating on numeric values.

var a = 2 || 3    // || Logical OR operator returns truthy value -- if first operand is truthy || operator returns first operand
var b = 0 || 2    //                                             -- if first operand is falsy || operator returns second operand
var c = 0 && 2
var d = 2 && 3    // if first operand is truthy && Logical AND operator returns second operand
var e = 2 && 0    // if first operand is falsy && Logical AND operator returns first operand

var f = ~(5)      // Bitwise NOT operator : first converts operand into binary representation, then inverts the bits 
                  //                Ex: ~5 => 101 => Invert bits => 010
                  //                    -6 => 6 => 110 then 2's complements = invert bits + 1
                  //                                                       = 001 + 1 => 010
                  //                    Therefore Not operator of 5 = -6

                  
var num = 6                  
console.log(a,b,c,d,e,f)
console.log("Increment and Decrement operations: "+ ++num, num++, --num, num-- )