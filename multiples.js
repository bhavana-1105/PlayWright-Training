let x = 2000;
let y = 3200;
let num = [];
for (let i = x; i <= y; i++) {
    if (i % 7 === 0 && i % 5 !== 0) {
        num.push(i);
    }
}
console.log(num.join(', '));