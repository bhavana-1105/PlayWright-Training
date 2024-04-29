function reverseArray(array)
{
    let reverseArr = [];
    let length = array.length;
    for(let i=0; i<length; i++)
    {
        reverseArr[i] = array.pop();
    }
    return reverseArr;
}
function reverseString(string) 
{
    let reverseStr = "";
    for(let i=string.length-1; i>=0; i--)
    {
        reverseStr= reverseStr + string[i];
    }
    return reverseStr;
}
let arr = [5, 2, 8, 15, 7, 13, 6];
let text = "Hello World";
console.log("Reversed Array: "+ reverseArray(arr),
            "\nReversed String: "+reverseString(text));