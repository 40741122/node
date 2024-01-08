import http from "http";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {readFileSync} from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response)=>{
  let {pathname} = new URL(request.url, "http://localhost")
  
  if(pathname ==="/"){
    // test2.html
    let htmlContent = readFileSync(resolve(__dirname, "test2.html"))
    response.end(htmlContent)
  }else if(pathname === "/test.css"){
    // test.css
    let cssContent = readFileSync(resolve(__dirname, "test.css"))
    response.end(cssContent)
  }else if(pathname === "/test.js"){
    //test.js
    let jsContent = readFileSync(resolve(__dirname, "test.js"))
    response.end(jsContent)
  }else{
    // 404 
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end("<h1>檔案找不到</h1>");
  }
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})