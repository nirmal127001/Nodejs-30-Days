const express = require('express')
const app = express()

function positiveIntegerHandler(req, res, next) {
    const error = new Error('This is negative number!')
    console.log(parseInt(req.params.number))
    if(req.params.number <0){
      console.log(error)
    }
    next()
  }

app.use(positiveIntegerHandler)

app.get('/positive/:number',(req,res)=>{
    res.send('Success')
})

const port = process.env.PORT || 8080  //creates dynamic port or default 8080
app.listen(8080, () => console.log('Port is running on: '+port))