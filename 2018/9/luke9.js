const input = require("./input.json");
const md5 = require("md5");

let msg = "";
let prevHash = md5("julekalender");
let used = new Set();
while (msg.length != input.length) {
    for (let i = 0; i < input.length; i++) {
        const { ch, hash } = input[i];
        if (used.has(i)) continue;
        if (md5(prevHash + ch) === hash) {
            msg += ch;
            used.add(i);
            prevHash = hash;
        }
    }
}
console.log(msg);
