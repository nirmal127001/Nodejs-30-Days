const express = require('express')
const app = express()

function positiveIntegerHandler(req, res) {
    
  }

app.use(positiveIntegerHandler)

app.get('/',(req,res)=>{
    res.send('Hello')
})

const port = process.env.PORT || 8080  //creates dynamic port or default 8080
app.listen(8080, () => console.log('Port is running on: '+port))