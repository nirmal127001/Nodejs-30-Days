const cp = require('child_process') //a node module to run sub tasks in the script

// cp.execSync('calc') //opens calculator app in your system
// cp.execSync('start brave google.com') //opens brave browser

console.log("output: "+ cp.execSync('node app.js')) //runs app.js