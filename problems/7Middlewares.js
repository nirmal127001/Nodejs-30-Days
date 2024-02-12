const express = require('express')
const app = express()

function requestLoggerMiddleware(req, res, next) {
    let currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    console.log("datetime: "+datetime)
    console.log("Method is: "+req.method)
    next()
  }
app.use(requestLoggerMiddleware)

app.get('/',(req,res)=>{
    res.send('Hello')
})

const port = process.env.PORT || 8080  //creates dynamic port or default 8080
app.listen(8080, () => console.log('Port is running on: '+port))