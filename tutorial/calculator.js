add = (a,b)=>{
    return a+b
}
sub = (a,b)=>{
    return a-b
}
mult = (a,b)=>{
    return a*b
}
div = (a,b)=>{
    return a/b
}

module.exports={  //exporting functions from this file to be used by other files
    add : add,
    subtract : sub,
    multiply : mult,
    divide : div
}