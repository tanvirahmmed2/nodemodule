const http = require('http')
const fs = require('fs')
const port = 3000
const hostName = '192.168.101.227'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { "content-type": 'text/html' })
            res.write(data)
            res.end()
        })
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            res.writeHead(200, { "content-type": 'text/html' })
            res.write(data)
            res.end()
        })
    }
    else {
        fs.readFile('err.html', (err, data) => {
            res.writeHead(400, { "content-type": 'text/html' })
            res.write(data)
            res.end()
        })
    }

})
server.listen(port, hostName, () => {
    console.log(`The server is runing in http://${hostName}:${port}`);

})