let myPromise = new Promise(function(resolve,reject){
    const a = 5
    const b = 5

    setTimeout(()=>{
        if(a==b){
            resolve('Equal')
        }
        else{
            reject('Not Equal')
        }
    },2000)
})
// pending state
// console.log(myPromise)

// fulfilled statge
//consuming your promise
myPromise.then(function(result){
    console.log(result)  //fulfilled state
}).catch(function(failedResult){
    console.log(failedResult) //rejected state
})