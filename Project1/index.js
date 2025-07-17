const express= require('express')
const app =express()
const port = 3000


const bodayparser= require("body-parser")
const bodyParser = require('body-parser')
app.use(bodayparser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/circle", (req,res)=>{
    res.sendFile(__dirname + "/circle.html")
})

app.post("/circle", (req, res)=>{

    const radius= req.body.radius;
    const area= 3.11416 *  radius * radius
    res.send(`<h1>Area ${area}</h1>`)
})






app.get("/triangle", (req,res)=>{
    res.sendFile(__dirname + "/triangle.html")
})

app.post("/triangle", (req,res)=>{
    const height= req.body.height;
    const base= req.body.base;
    const area= 0.5* base * height
    res.send(`<h1>Area: ${area} </h1>`)

})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
    
})