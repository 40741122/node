import http from "http";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {readFileSync} from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response)=>{
  let htmlContent = readFileSync(resolve(__dirname, "test.html"))
  response.setHeader('content-type','text/html;charset=utf-8');
  response.end(htmlContent);
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})