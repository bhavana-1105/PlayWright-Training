let x = 535;
console.log(checkPalindrome(x));
/**
 * Method which can be used for both number and string, but we just have to convert the number to string
 * @param  value 
 * @returns 
 */
function checkPalindrome(value) {
    let valueString = String(value);
    const length = valueString.length;
    for(let i=0; i< parseInt(length/2); i++)
    {
        if(valueString[i]!==valueString[length-1-i])
        {
            return "Not a palindrome";
        }
    }
    return "It is a palindrome";
}

//Traditional method used for numbers
// async function checkPalindrome(x) {
//     let num = 0;
//     let rem;
//     let actual = x;
//     while(x > 0) {
//         rem = x % 10;
//         x = parseInt(x / 10);
//         num = num * 10 + rem;
//     }
//     let output = (actual === num)? "Yes" : "No";
//     console.log("Is Palindrome: "+ output)
// }