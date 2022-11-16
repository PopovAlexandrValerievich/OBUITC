const http = require('http')
const fs = require('fs')
http.createServer((request,response)=>{
    switch (request.url){
    case '/':
        response.end('index.html')
        break
    case '/hello-world':
        response.end('Hello world!')
        break
    default:
        response.end('404')
        break
    }
}).listen(3003, '127.0.0.1')