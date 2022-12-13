const fs = require('fs');


// File Creation
// fs.writeFile("nandan.txt", 'this is presonal file somthing.', (err) =>{
//     console.log("This is Asunscronous functation")
//     console.log(err);
// })

/*
   1-> we pass them a function as an argument - (a callback) - that gets called when that task complitions.
    
   2-> The callback has an argument that tells you whether the operation completed successfully.

   3-> Now we need to say what to do when fs.writeFile has complited (even if it's nothing), and start checking for errors.
 */

// File Data Updating
// fs.appendFile(
//   "nandan.txt",
//   "Now we need to say what to do when fs.writeFile has complited ", () => {
//     console.log('updated sussfully')
//   });

// File Data Read File

fs.readFile("nandan.txt", 'utf-8', (err, data) =>{
    console.log(data)
    console.log(err)
})

