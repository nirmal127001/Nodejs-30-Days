const path = require('path')

resolvePath = (relativePath) =>{
    console.log(path.resolve(relativePath))
}

resolvePath('../Files/file.txt')