const assert = require("assert")

const lim = 18163106;
//const lim = 1000;

assert(isZeroHeavy(1050006) === true)
assert(isZeroHeavy(105006) === false)

assert(isZeroHeavyNoStr(1050006) === true)
assert(isZeroHeavyNoStr(105006) === false)

function isZeroHeavy(n) {
    const str = n.toString();
    const len = str.length;
    let zeroes = 0;
    for(let i = 0; i < len; i++) {
        if(str[i] === '0') {
            zeroes++;
        }
    }
    return zeroes > (len - zeroes)  
}

function isZeroHeavyNoStr(n) {
    let c = n;
    let digits = 0, zeroes = 0;
    
    while(c > 0) {
        if(c % 10 === 0) {
            zeroes++;
        }
        digits++;
        c = ~~(c / 10); //integer division
    }
    return zeroes > (digits - zeroes)
}

let cnt = 0;
let start = Date.now();
for(i = 100; i <= lim; i++) {
    if(isZeroHeavyNoStr(i)) {
        cnt+= i;
    }
}
let time = Date.now() - start;
console.log("Sum of zero heavy numbers: ", cnt)
console.log('used ', time, ' ms')

