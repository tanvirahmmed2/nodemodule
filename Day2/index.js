const fs = require('fs')

fs.exists("demo1.txt",  (err)=>{
    if (err) {
        console.log("found");
        
        
    }
    else{
        console.log("not found");
        
        
    }
})

//fs.readFile, fs.writeFile, fs.appendFile, fs.rename