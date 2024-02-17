const fs = require('fs')

fs.readFile('../../Files/f1.txt',cb1)  //asynchronously read file, cb1 is callback fn
function cb1(err,data){
    if(err) console.log(err)
    console.log("File 1 data: "+data)
    fs.readFile('../../Files/f2.txt',cb2) //makes cb2 dependable on cb1, cb2 will always run after cb1 to eliminate random execution in callback.js
}

// fs.readFile('../../Files/f2.txt',cb2)  //asynchronously read file, cb2 is callback fn
function cb2(err,data){
    if(err) console.log(err)
    console.log("File 2 data: "+data)
    fs.readFile('../../Files/file.txt',cb3) //makes cb3 dependable on cb1, cb2 will always run after cb2
}

// fs.readFile('../../Files/file.txt',cb3)  //asynchronously read file, cb2 is callback fn
function cb3(err,data){
    if(err) console.log(err)
    console.log("File 3 data: "+data)
}
