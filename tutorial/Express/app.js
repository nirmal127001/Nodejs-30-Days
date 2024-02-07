const express = require('express')

const app = express()

app.get('/greet', (req , res) =>{
    res.send('Hello ',req.params.name)
})

const port = process.env.PORT || 8080  //creates dynamic port or default 8080
app.listen(port, () => console.log('Port is running on ${port}'))