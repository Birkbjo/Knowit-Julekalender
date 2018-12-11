const fs = require('fs');
const assert = require('assert');
const source = 'input-crisscross.txt';
const path = fs.readFileSync(source, 'UTF-8').trim();

const directions = (coords = []) => ({
    H: len => (coords = [coords[0] + len, coords[1]]),
    V: len => (coords = [coords[0] - len, coords[1]]),
    F: len => (coords = [coords[0], coords[1] + len]),
    B: len => (coords = [coords[0], coords[1] - len]),
});

function walk(path) {
    const step = directions([0,0]);
    for (let i = 0; i < path.length; i += 2) {
        const len = parseInt(path.substring(i, i + 1));
        const dir = path.substring(i + 1, i + 2);
        arr = step[dir](len);
       
    }
    return arr;
}

assert(JSON.stringify(walk('2H2F2H3B')) === JSON.stringify([4, -1]));
console.log(walk(path));
