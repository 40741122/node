import http from "http";
import {parse} from "url";

//方法一: 取路徑與網址參數
const server = http.createServer((request, response)=>{
    let res = parse(request.url, true);
    console.log(res);
    if(res.pathname == "/"){
      let name = res.query.name
      let password = res.query.password
      console.log(name, password);
    }
    let name = res.query.name
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end("你好主機")
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})