fs= require('fs')

readFileContent = (filePath)=>{
    let content = fs.readFileSync(filePath)
    console.log("Content: "+content)
}

readFileContent('C:\\Users\\nirma\\OneDrive\\Desktop\\Nodejs-30-Days\\Nodejs-30-Days\\Files\\file.txt')
