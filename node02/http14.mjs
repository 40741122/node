import http from "http";
import {dirname, resolve, extname} from "path";
import {fileURLToPath} from "url";
import {readFileSync, readFile} from "fs";

let mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  mp3: "audio/mpeg",
  json: "application/json"
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response)=>{
  let {pathname} = new URL(request.url, "http://localhost")
  if(pathname === "/"){
    pathname = "/index.html"
  }
  let root = __dirname + "/pages";
  let filePath = resolve(root, pathname.substring(1));
  let ext = extname(filePath).slice(1);
  let type = mimes[ext];
  readFile(filePath , (error, data)=>{
    if(error){
      response.setHeader('content-type','text/html;charset=utf-8');
      switch(error.code){
        case "ENOENT":
          response.statusCode = 404;
          response.end("<h1>找不到頁面</h1>")
          break;
        default:
          response.statusCode = 500;
          response.end("<h1>文件讀取失敗</h1>")
      }
    }else{
      if(type){
        if(type === "html"){
            response.setHeader("content-type", type+";charset=utf-8")
        }else{
            response.setHeader("content-type", type)
        }
    }else{
        response.setHeader("content-type", "application/octet-stream")
    }

    response.end(data);
}
  })
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})