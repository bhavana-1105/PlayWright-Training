let array = [1, 2, 3, 4, 5, 6];
function arrayFunctions(array) {
    console.log("Array Functions:\n");
    console.log("Actual array: "+ array);
    // copyWithin(target, start, end): copys the elements from start index to end index and paste's the copied elements from target index 
    console.log("copyWithin(): "+ array.copyWithin(2,1,3));
    //entries()
    let array1 = ["a", "b", "c"];
    let iterator = array1.entries();
    console.log("entries(): "+iterator.next().value); 
    console.log("entries(): "+iterator.next().value);
    //flat()    
    let array2 = [1,2,[5,6,[4,3,[9]]]]
    console.log("flat(): "+array2.flat());
    //unshift(value)
    array.unshift(9);
    console.log("unshift(): "+array);
    // splice(startIndex, deleteCount, item1, item2): from start index the items will be replaced 
    //                                                by deleting the number of elements using the deleteCount
    // splice() => adding/inserting
    array.splice(2,0,7)
    console.log("splice(): "+array);
    // splice() => removing/replacing
    array.splice(2,3,0)
    console.log("splice(): "+array);
    // shift()
    console.log("shift(): "+array.shift());  
    console.log("shift(): "+array)
    //reduceRight() => Compute the result from subtracting the numbers in the array right-to-left.
    function getSum(total, num) {
        return total - num;
    }
    console.log("reduceRight(): "+array.reduceRight(getSum));
    //reduce() => Compute the result from subtracting the numbers in the array left-to-right.
    console.log("reduce(): "+array.reduce(getSum));
    //join()
    console.log("join(): "+array.join(" and "));
}
function stringFunctions(string) {
    console.log("\nString functions:\n");
    console.log("charCodeAt(): "+string.charCodeAt(0));
    console.log("endsWith(): "+string.endsWith("WORLD", string.length));
    console.log("indexOf(): "+string.indexOf('O'));
    console.log("lastIndexOf(): "+string.lastIndexOf("O"));
    const regexp = /[A-E]/g;
    console.log("match(): "+string.match(regexp));
    console.log("padEnd(): "+string.padEnd(25, " 123456"));
}
arrayFunctions(array);
let string = "HELLO WORLD";
stringFunctions(string);
