function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) 
    {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (array[mid] < key) {
            left = mid + 1;
        }
        if (array[mid] > key) {
            right = mid - 1;
        }
    }
    return -1;
}
let arr = [1, 5, 7, 9, 12];
let key = 5;
console.log("index of the key element: "+ binarySearch(arr, key));