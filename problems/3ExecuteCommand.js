const cp = require('child_process') 

executeCommand = (command)=>{
    console.log((cp.execSync(command)).toString())
}

// executeCommand('pwd');
executeCommand('echo "Hello, Node.js!"');