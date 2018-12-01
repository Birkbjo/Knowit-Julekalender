const fs = require("fs");

const numbers = fs
    .readFileSync("input-vekksort.txt", "UTF-8")
    .split("\n")
    .map(Number);

function vekkSort(arr) {
    const res = [];
    let prev = -1;
    for (elem of arr) {
        if (elem >= prev) {
            res.push(elem);
            prev = elem;
        }
    }

    return res;
}
const sorted = vekkSort(numbers);
const res = sorted.reduce((acc, curr) => acc + curr, 0);

console.log(res);
