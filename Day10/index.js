
const express = require('express')

const app= express()
const port =3000


app.get("/product/:id([0-9]+)", (req, res)=>{
    res.send(`<h1>ID: ${req.params.id}</h1>`);
})

app.get("/product/:title([a-zA-Z]+)", (req, res)=>{
    res.send(`<h1>ID: ${req.params.title}</h1>`);
})



app.use("*", (req,res)=>{
    res.status(400).send({
        message: "Not a valide route"
    })
})

app.listen(port, ()=>{
    console.log(`server currently running at http://localhost:${port}`);
    
})
