const fs = require('fs')
//In asynchronous js there is not 2 thread working, there is only one thread concept in js.
//In this method all the sync code runs first and async code are kept separate in other place.
//when all sync codes are run then our event loop checks id the call stack is empty or not
//if the call stack is empty then it randomly fetch async code from separate place to call stack and that will start running


console.log('First Line')

fs.readFile('../../Files/f1.txt',cb1)  //asynchronously read file, cb1 is callback fn
function cb1(err,data){
    if(err) console.log(err)
    console.log("File 1 data: "+data)
}

fs.readFile('../../Files/f2.txt',cb2)  //asynchronously read file, cb2 is callback fn
function cb2(err,data){
    if(err) console.log(err)
    console.log("File 2 data: "+data)
}

console.log('Last Line') //this won't print last line at last.