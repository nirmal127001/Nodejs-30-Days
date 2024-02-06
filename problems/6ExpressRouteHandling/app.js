const express = require('express')

const app = express()

app.get('/greet', (req , res) =>{
    res.send('Hello ',req.params.name)
})

app.listen(8080, () => console.log('Port is running on 8080'))