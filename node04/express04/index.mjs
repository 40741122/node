import express from "express"

const app = express();

app.get("/", (req, res)=>{
    res.send("這是首頁")
})

app.get("/p/:id/", (req ,res)=>{
    let id = req.params.id;
    console.log(id);
    let contentText = "";
    if(id === "CvRz0e3Awmi"){
        contentText = "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》";
    }else if (id === "CvZP-PIguWG"){
        contentText = "浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》";
    }
    res.send(contentText)
})

app.get("/users/:userID?", (req, res)=>{
    let userID = req.params.userID;
    console.log(userID);
    res.send(`Hello, ${(req.params.userID) ?userID:"guest"}`);
})

app.listen(3000,()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})