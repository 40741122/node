import http from "http";

const server = http.createServer((request, response)=>{
  let {url, method} = request;
  let {pathname} = new URL(url, "http:localhost");
  console.log(method, pathname);
  response.setHeader('content-type','text/html;charset=utf-8');
  if(method ==="GET" && pathname ==="/"){
    response.end("你好主機")
  }else if(method ==="GET" && pathname ==="/reg"){
    response.end("你好註冊頁")
  }else if(method ==="GET" && pathname ==="/login"){
    response.end("你好登入頁")
  }else{
    response.end("找不到頁面")
  }
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})