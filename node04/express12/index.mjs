import express from 'express';
import {fileURLToPath} from 'url';
import {dirname, resolve, join} from 'path';
// import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")));

app.use("/bootstrap" ,express.static(join(__dirname, "node_modules/bootstrap/dist")));
app.use("/fontawesome" ,express.static(join(__dirname, "node_modules/@fortawesome/fontawesome-free")));
app.use("/jquery" ,express.static(join(__dirname, "node_modules/jquery/dist")));
app.use(express.json());
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res)=>{
    res.send("這是首頁")
})

app.get("/login", (req, res)=>{
    res.sendFile(resolve(__dirname, "public", "form.html"))
})

app.post("/login", (req, res)=>{
    console.log(req.body);
    res.send("取得使用者資訊")
})

app.listen(3000, (req, res)=>{
    console.log("伺服器已啟用 htts://localhost:3000");
})