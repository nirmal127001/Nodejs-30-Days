const fs = require('fs')

writeToFile = (filePath, content) => {
    fs.writeFileSync(filePath,content);
}
writeToFile("../Files/output.txt","this is my content")
