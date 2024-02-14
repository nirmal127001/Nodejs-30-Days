const express = require('express')
const app = express()

function positiveIntegerHandler(req, res, next) {
    const error = new Error('This is negative number!')
    const number=parseInt(req.query.number)
    if(number <0){
      // console.log(error.message)
      res.send(error.message)
    }
    else next()
  }

app.use(positiveIntegerHandler)

app.get('/positive',(req,res)=>{
    res.send('Success')
})

const port = process.env.PORT || 8080  //creates dynamic port or default 8080
app.listen(8080, () => console.log('Port is running on: '+port))