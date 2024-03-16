const mongoose = require('mongoose') //to import package mongoose installed via npm i mongoose

mongoose.connect('mongodb://localhost/testDatabase')  //testDatabase - name of db
.then(() => console.log('Connected!'))
.catch(err=> console.log('Not connected',err))