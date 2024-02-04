const fs = require('fs')

content = fs.readFileSync('../Files/file.txt')
console.log("content: "+content)

// fs.writeFileSync('../Files/file.txt',"This is new message from write function") //overrides with new data wiping previous data or creates this file if not exist
//fs.appendFileSync('../Files/file.txt'," This is appended message")
// fs.unlinkSync('../Files/temp.txt') //to delete a file

let path = "../Files"
FolderContent = fs.readdirSync(path) 
console.log(FolderContent)

let flag = fs.existsSync('Files') //to check if dir/files exist
console.log(flag)

fs.rmdirSync('folder') //to delete empty dir called folder
