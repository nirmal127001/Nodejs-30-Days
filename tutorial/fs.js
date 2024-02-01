const fs = require('fs')

content = fs.readFileSync('../Files/file.txt')
console.log("content: "+content)

// fs.writeFileSync('../Files/file.txt',"This is new message from write function") //overrides with new data wiping previous data or creates this file if not exist
//fs.appendFileSync('../Files/file.txt'," This is appended message")
fs.unlinkSync('../Files/temp.txt')