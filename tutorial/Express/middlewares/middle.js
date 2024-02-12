myMiddleWare= (req,res,next)=>{ //next is used to pass the control from middleware to next middleware or finally to res.
    console.log("I am a middleware from separate folder")
    next()
}
module.exports = myMiddleWare;