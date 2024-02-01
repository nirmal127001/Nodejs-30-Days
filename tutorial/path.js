const path = require('path')

let ext = path.extname('../Files/file.txt') //extracts extension of the file for given path
console.log(ext)

let baseName = path.basename('../Files/file.txt') //gives the actual file name
console.log(baseName)
console.log(__filename) 
console.log(__dirname)
