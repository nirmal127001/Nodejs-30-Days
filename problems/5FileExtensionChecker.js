const path = require('path')

checkFileExtension = (filePath, expectedExtension) => {
    let ext = path.extname(filePath)
    if(ext == expectedExtension){
        console.log("File has the expected extension: "+ext)
    }
    else{
        console.log("File does not have the expected extension. Expected: "+expectedExtension+" Actual: "+ext)
    }
    
}

checkFileExtension('../Files/file.txt','.txt')