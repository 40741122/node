import http from "http";

const server = http.createServer((request, response)=>{
    // console.log(request.method);
    // console.log(request.url);
    // console.log(request.httpVersion);
    // 以上是請求行
    console.log(request.headers);
    response.setHeader("content-type", "text/html;charset=utf-8")
    response.end("你好, 主機")
});

server.listen(9000, ()=>{
    console.log("server is running at http://localhost:9000");
})