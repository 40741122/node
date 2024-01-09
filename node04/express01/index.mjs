import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("你好主機");
});

app.get("/home", (req, res)=>{
    res.send("這裡是首頁");
});


app.listen(3000, ()=>{
    console.log("伺服器啟動於 http://localhost:3000");
})