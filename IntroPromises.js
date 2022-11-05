const fs = require('fs');

// fs.readFile('f11.txt',cb);

console.log("Before");
// Using callbacks

// function cb(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data + " ");
//     }
// }

// Using Promises

let promiseRead = fs.promises.readFile('f1.txt');
console.log(promiseRead);
promiseRead.then(printData);
promiseRead.catch(printErr);
console.log("after");

function printData(data){
    console.log("Promise Fullfilled");
    console.log(data + "");
}
function printErr(err) {
    console.log("Promise Not Fullfilled"); 
    console.log(err);
}