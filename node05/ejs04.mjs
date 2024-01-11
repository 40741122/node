import express from 'express';
import {dirname, resolve, join} from 'path';
import {fileURLToPath} from 'url';

let user;

const __dirname= dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.use('/bootstrap', express.static(join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(join(__dirname, 'node_modules/jquery/dist')));

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.get("/test1", (req, res)=>{
    let name = "Ben";
    let str = "Hello world !";
    res.render("test1", {name, str});
})

app.get("/test2", (req, res)=>{
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
    res.render("test2", {blackpink});
})

app.get("/test3", (req, res)=>{
    res.render("test3", {user});
})

app.get("/login", (req, res)=>{
    user={
        name: "Alex",
        img: "https://randomuser.me/api/portraits/men/46.jpg"
    }
    res.redirect("/test3")
})

app.get("/logout", (req, res)=>{
    user = undefined;
    res.redirect("/test3")
    
})

app.listen(3000, ()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})