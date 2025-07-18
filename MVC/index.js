const express = require('express')
const app = express()
const PORT = 3005

const userRouter=require("./routes/users.route")

app.use(express.urlencoded({ extended: true }))
app.use(userRouter)




// app.get("/", (req, res) => {
//     res.send(`<h1>Hello</h1><a href="/users">Go to User Form</a>`)
// })



app.use((req, res) => {
    res.status(404).json({
        message: "Resource not found"
    })
})

app.listen(PORT, () => {
    console.log('Go')
    console.log(`Server is running http://localhost:${PORT}`)
})
