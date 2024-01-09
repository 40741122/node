import express from "express"

const app = express();

let checkCodeMiddleware = (req, res, next)=>{
    if(!req.query.code){
        res.send("請輸入密碼");
    }else{
        if(req.query.code === "464"){
            next();
        }else{
            res.send("密碼錯誤");
        }
    };
}

app.get("/", (req, res)=>{
    res.send("這是首頁");
});

app.get("/home", (req, res)=>{
    res.send("前台首頁");
});

app.get("/admin", checkCodeMiddleware, (req, res)=>{
    res.send("後台頁面");
});

app.get("/setting", checkCodeMiddleware, (req, res)=>{
    res.send("設定頁")
});

app.get("*", (req, res)=>{
    res.status(404);
    res.send("<h1>404 - Not Found</h1>");
});

app.listen(3000,()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})