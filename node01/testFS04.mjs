import {createWriteStream} from "fs";

const ws = createWriteStream("./連續寫入測試.txt");
ws.on("finish", ()=>{
    console.log("全部寫入完成");
})
ws.write("銀燭秋光冷畫屏，\r\n");
ws.write("輕羅小扇撲流螢。\r\n");
ws.write("天階夜色涼如水，\r\n");
ws.write("臥看牽牛織女星。\r\n");
ws.end();
