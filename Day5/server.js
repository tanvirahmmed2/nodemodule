const http= require('http')
const port= 3000
const hostName= '127.0.0.1'

const myServer= http.createServer((req, res)=>{
    res.writeHead(202,{'content-type': 'text/plain'})
    res.write("Hello")
    res.write("hii")
    res.end()
})

myServer.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`);
    
})