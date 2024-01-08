import http from "http";

const server = http.createServer((request, respons)=>{
    respons.end("hello server!!!!!")
})

server.listen(9000, ()=>{
    console.log("server is running http://localhost:9000");
})