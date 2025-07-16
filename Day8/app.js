const express= require('express')
const app= express();

const userRouter= require("./routes/users.route")


const port = 3000


app.use("/user", userRouter)


app.use("/register", (req, res)=>{

    // res.status(200).json({
    //     message: "I'm registerpage",
    //     statuscode:200
    // })

    // res.redirect("/login")

    res.statusCode=200
    res.sendFile(__dirname+"/views/index.html")
})

app.get("/", (req,res)=>{
    res.send('home')
})
app.get("/login", (req,res)=>{
    // res.cookie("name", "rabeya")

    // res.cookie("age", "30")
    // res.clearCookie("name")
    // res.clearCookie("age")

    res.append("id", "105401")
    res.end()
    
})


app.use((req,res)=>{
    res.send("<h1>I'm a get request at 404 err server</h1>")
})


app.listen(port, ()=>{
    console.log(`server is currnetly running at port http://localhost:${port}`)
})
module.exports= app