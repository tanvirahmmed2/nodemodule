const express=require('express')
const app =express()
const PORT=3000

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, ()=>{
    console.log("Guess");
    
    console.log(`Server is running at http://localhost:${PORT}`);
    
})