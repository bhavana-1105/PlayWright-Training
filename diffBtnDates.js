function dateDiffInDays(date1, date2) {
    // Convert the dates to milliseconds
    const timeDifference = Math.abs(date2 - date1);  
    const daysDifference = timeDifference / (1000 * 3600 * 24);  
    return Math.round(daysDifference);
}
  
const date1 = new Date("2022-01-31");
const date2 = new Date("2022-01-11");
  
const diffInDays = dateDiffInDays(date1, date2);
console.log(`The difference between the two dates is ${diffInDays} days.`);
