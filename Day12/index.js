
const express = require("express")
const app= express()
const PORT=3000



const myMiddleware=(req,res,next)=>{
    

    req.currentTime= new Date(Date.now())

    next()

}



app.get("/", myMiddleware ,(req,res)=>{
    console.log("i'm Home "+ req.currentTime);
    
    
    res.send(`<h1>Hello</h1>`)

})
app.get("/about", myMiddleware ,(req,res)=>{
    console.log("i'm about "+ req.currentTime);
    
    
    res.send(`<h1>About</h1>`)

})
app.use((req,res,next)=>{
    res.send("broken")
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})