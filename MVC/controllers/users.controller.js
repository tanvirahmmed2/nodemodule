const path=require('path')
const users = require("../model/users.model")


exports.home=(req,res)=>{
    
    res.send(`<h1>Home</h1><a href="/users">go to users</a>`)
}

exports.getUsers= (req, res) => {
    res.sendFile(path.join(__dirname+ "/../views/index.html"))
}

exports.postUsers= (req, res) => {
    const name = req.body.name
    const age = Number(req.body.age)

    const newUser = { name, age }
    users.push(newUser)

    res.status(201).json({
        success: true,
        users
    })
    
}