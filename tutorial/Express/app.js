const express = require('express')
const myMiddleWares = require('./middlewares/middle.js')

const app = express()
//middleware starts
//middlewares are piece of code or fn that runs between req and response.
app.use(express.json()) 
// app.use(function(req,res,next){ //next is used to pass the control from middleware to next middleware or finally to res.
//     console.log("I am a middleware")
//     next()
// })
//This middleware is moved to separate folder.
app.use(function(req,res,next){ //next is used to pass the control from middleware to next middleware or finally to res.
    console.log("I am a new middleware")
    next()
})

app.use(myMiddleWares)
//middleware ends

const courses = [
    {id:1 , name: 'JavaScript'},
    {id:2 , name: 'Java'},
    {id:3 , name: 'Python'}
]

app.get('/greet', (req , res) =>{
    res.send('Hello')
})

//Route parameters
// app.get('/courses/:id',(req,res)=>{
//     res.send(req.params.id)
// })

//multiple routers
app.get('/courses/:id',(req,res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('The course is unavailable.')
    res.send(course.name)
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})

//HTTP POST
app.post('/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})
//HTTP PUT
app.put('/courses/:coursename',(req,res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course is unavailable.')
    course.name = req.body.name
    res.send(course)
})
//HTTP DELETE
app.delete('/courses/:coursename',(req,res)=>{
    let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)
    if(!UpdatedCourses) res.status(404).send('The course was not available.')
    res.send(UpdatedCourses)
})



const port = process.env.PORT || 8080  //creates dynamic port or default 8080
app.listen(port, () => console.log('Port is running on: '+port))