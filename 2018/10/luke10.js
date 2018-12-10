const fs = require("fs");
const source = "./input.spp";

const lines = fs
    .readFileSync(source, "UTF-8")
    .split("\n")

let stack = [];

const commands = {
    " ": () => stack.push(31),
    ":": () => {
        stack = [stack.reduce((acc, curr) => acc+curr, 0)]
    },
    "|": () => stack.push(3),
    "'": () => stack.push(stack.pop() + stack.pop()),
    ".": () => {
        let a = stack.pop();
        let b = stack.pop();
        stack.push(a-b);
        stack.push(b-a);
    },
    "_": () => {
        let a = stack.pop();
        let b = stack.pop();
        stack.push(a*b);
        stack.push(a);
    },
    "/": () => stack.pop(),
    "i": () => stack.push(stack[stack.length -1]),
    "\\": () => stack[stack.length -1 ]++,
    "*": () => {
        let a = stack.pop();
        let b = stack.pop();
        stack.push(Math.floor(a/b));
    },
    "]": () => {
        stack.pop() % 2 === 0 && stack.push(1)
    },
    "[": () => {
        let a = stack.pop();
        a % 2 !== 0 && stack.push(a)
    },
    "~": () => {
        let lim = stack.length - 4;
        let arr = [];
        for(let i = stack.length -1; i > lim; i--) {
            arr.push(stack.pop())
        }
        stack.push(Math.max(...arr))
    }
}
function parse(line) {
    const s = line.split("");
    for(let i = 0; i < s.length; i++) {
        const c = s[i];
        if(c === "K") {
            return;
        }
        if(commands[c]) {
            commands[c]();
        } else {
            throw new Error("Unrecognized value: ", c)
        }
    }
}

lines.forEach(parse);
console.log(Math.max(...stack))