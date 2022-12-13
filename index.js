const fs = require("fs");

// Create a file named "hello.txt":
// fs.writeFileSync("hello.txt", "Hello from Node.js!");

// fs.appendFileSync("hello.txt", "Hello from Node.js! by Aknandan Sharma. Auranganbad Bihar");

// const buf_data = fs.readFileSync("hello.txt");
// console.log(buf_data);

// Output: <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 2e 6a 73 21 0a 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 2e 6a 73 21 20 62 79 20 41 6b 6e 61 6e 64 61 6e 20 53 68 61 72 6d 61 2e 20 41 75 72 61 6e 67 61 6e 62 61 64 20 42 69 68 61 72 0a>

// const org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync("hello.txt", "readwrite.txt");

// fs.writeFileSync("nandan/hello.txt", "Hello from Node.js! This is first operation.");

// fs.appendFileSync("nandan/hello.txt", "Hello from Node.js! by Aknandan Sharma. Auranganbad Bihar This is Bihari pokharhan Aurangabad :-)");


// const buf_data = fs.readFileSync("nandan/hello.txt", "utf-8");
// console.log(buf_data);

// const org_data = buf_data.toString();
// console.log(org_data);

// fs.renameSync("nandan/hello.txt", "nandan/readwrite.txt");

// fs.unlinkSync("nandan/readwrite.txt");

// fs.rmdirSync("nandan");