// Exporting the modules.


const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const name = "this file is exported"

module.exports = { add, sub, mul, name}; // this file exported.