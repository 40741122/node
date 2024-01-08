import {createReadStream, createWriteStream} from "fs";

let rs = createReadStream("./video/movie.mp4");
let ws = createWriteStream("./video/movie4.mp4");
// let n = 0;
// rs.on("data" ,(chunk)=>{
//     n++;
//     console.log(`寫入中${n}`);
//     ws.write(chunk);
// });

// rs.on("end", ()=>{
//     console.log("複製完成");
// });
rs.pipe(ws);