import express from "express";
import singers from "./singers.js"
import {fileURLToPath} from "url";
import {dirname, resolve} from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (req, res)=>{
    res.send("這是首頁")
})

app.get("/nores", (req, res)=>{
    // res.status(500);
    // res.set("aaa", "bbb");
    // res.send("你好 , 這是沒有回應")
    res.status(500)
        .set("aaa", "bbb")
        .send("你好 , 這是沒有回應")
})

app.get("/netflix", (req, res)=>{
    res.redirect("https://www.netflix.com")
})

app.get("/singers", (req, res)=>{
    res.json(singers);
})

app.get("/content", (req, res)=>{
    res.sendFile(resolve(__dirname, "test.html"))
})

app.listen(3000,()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})