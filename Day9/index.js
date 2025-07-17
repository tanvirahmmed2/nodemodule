const express = require("express")
const app = express()
const port =3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())



app.get("/register", (req,res)=>{
    res.sendFile(__dirname + "/index.html")

})



app.post("/register",(req,res)=>{


    const fullName= req.body.fullName
    const Age= req.body.Age
    res.send(`<h1> Your name: ${fullName} and age: ${Age}</h1>`)

    res.send("Hello")

})


// app.get("/userId/:id/userAge/:age", (req,res)=>{
    
//     const id=req.params.id
//     const age=req.params.age

//     res.send(`Student id: ${id} and age: ${age}`)
    

// })
// app.get("/", (req,res)=>{
//     // const id= req.query.id
//     // res.send(`<h1>Student id is ${id}</h1>`)
//     // res.end()

    

// })

// app.get("/", (req,res)=>{

//     const id= req.header("id");
//     const name= req.header("name");
//     res.send(`name: ${name}, id: ${id}`)

// })




app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
    
})