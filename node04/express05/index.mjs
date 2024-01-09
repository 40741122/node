import express from "express";
// import data1 from "./singers.json" assert{type:"json"};
// const {singers} = data1 ;
import singers from "./singers.js"

console.log(singers);

const app = express();

app.get("/", (req, res)=>{
    res.send("這是首頁")
})

app.get("/singer/:id.html", (req, res)=>{
    let id = req.params.id;
    let result = singers.find((singer)=>{
        if(singer.id === parseInt(id)){
            return true;
        }
    })
    if(!result){
        res.statusCode = 404;
        res.send("<h1>404 - 找不到頁面</h1>");
        return false;
    }
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${result.singer_name}</title>
    </head>
    <body>
        <h1>${result.singer_name}</h1>
        <img src="${result.singer_img}" alt="">
    
    </body>
    </html>`)

})

app.get("/users/:userID?", (req, res)=>{
    let userID = req.params.userID;
    console.log(userID);
    res.send(`Hello, ${(req.params.userID) ?userID:"guest"}`);
})

app.listen(3000,()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})