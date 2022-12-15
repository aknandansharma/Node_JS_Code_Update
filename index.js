// // OS Module To Get Operating System.

// const os = require("node:os");

// // this is console your computer Articture  .
// console.log(os.arch()) //--> output x64AM

// // Show your free RAM
// const freeMemory = os.freemem();
// // console.log(freeMemory)
// console.log(`${freeMemory/1024/1024/1024}`)

// // Show your Total Memoey
// const totelMemory = os.totalmem();
// // console.log(totelMemory)
// console.log(`${totelMemory / 1024 / 1024 / 1024}`);


// // PC User Name
// console.log(os.hostname());

// // PC Type Like -> Windows, Linux...etc
// console.log(os.platform());

// // Somthing
// console.log(os.tmpdir());
// console.log(os.type());



// Path Module

// const path = require("path");


// console.log(path.dirname("/home/aknandan/Documents/MERN/Node_JS/index.js"));

// console.log(path.extname("/home/aknandan/Documents/MERN/Node_JS/index.js"));

// console.log(path.basename("/home/aknandan/Documents/MERN/Node_JS/index.js"));

// const mypath = path.parse("/home/aknandan/Documents/MERN/Node_JS/index.js")

// console.log(mypath.root);
// console.log(mypath.name);


// Importing funcation from opera.js

// const {add, sub, mul,  name} = require('./opera')

// console.log(add(5, 5)); 
// console.log(sub(50, 5)); 
// console.log(mul(50, 5)); 
// console.log(name)


// 