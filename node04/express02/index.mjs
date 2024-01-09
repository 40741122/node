import express from "express";
const app = express();

app.get("/", (req, res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.send("這是首頁")
})

app.get("/home", (req, res)=>{
    res.send("這是 home");
})

app.post("/login", (req, res)=>{
    res.send("進入登入的流程");
})

app.all("/reg", (reg, res)=>{
    res.send("<h1>不管任何方法的 reg</h1>")
})

app.all("*", (reg, res)=>{
    res.statusCode = 404;
    res.send("<h1>404 - 找不到頁面</h1>")
})

app.listen(3000, ()=>{
    console.log("服務以啟動於 http://localhost:3000");
})