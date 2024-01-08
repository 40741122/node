import http from "http";

const server = http.createServer((request, response)=>{
  response.statusCode = 404;
  // response.statusMessage = "no page";
  response.setHeader('server',"a's server");
  response.setHeader('content-type','text/html;charset=utf-8');
  response.write("test 1<br>")
  response.write("test 2<br>")
  response.write("test 3<br>")
  response.write("test 4<br>")
  response.end("你好主機")
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})