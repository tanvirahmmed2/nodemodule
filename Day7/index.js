const http=require('http')
const port= 3000
const hostName= '127.0.0.1'

const server= http.createServer((req, res)=>{
    res.end("Welcome to the server")

})
server.listen(port, hostName, ()=>{
    console.log(`The server is runing in http://${hostName}:${port}`);
    
})