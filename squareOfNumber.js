/**
 * This is an function expression which is named
 * @param {*} value 
 */
function funExpression(value) {
    console.log("Square of a number: " + calculate(value));
    function calculate(num) {
        return num*num;
    }
}
/**
 * This is an anonyms function
 * @param {*} value 
 */
function anonymsFun(value) {
    var square = function(num) {
        return num*num;
    }
    console.log("Square of a number: " + square(value));
} 

funExpression(9);
anonymsFun(7);