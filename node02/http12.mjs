import http from "http";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {readFileSync, readFile} from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response)=>{
  let {pathname} = new URL(request.url, "http://localhost")
  console.log(pathname);
  if(pathname === "/"){
    pathname = "/index.html"
  }
  let root = __dirname + "/pages"
  let filePath = resolve(root, pathname.substring(1))
  readFile(filePath , (error, data)=>{
    if(error){
      response.statusCode = 500;
      response.setHeader('content-type','text/html;charset=utf-8');
      response.end("<h1>文件讀取失敗</h1>");
    }else{
      response.end(data);
    }
  })
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})