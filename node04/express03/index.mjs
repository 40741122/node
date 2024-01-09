import express from "express";

const app = express();

app.get("/", (reg, res)=>{
    res.send("這是首頁")
})

app.get("/request", (req ,res)=>{
    res.send("取得要求的訊息");
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.get("host"));
    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);
})

app.listen(3000, ()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})