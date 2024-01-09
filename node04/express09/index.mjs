import express from "express"
import {fileURLToPath} from 'url';
import {dirname, resolve, join} from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")));

app.get("/", (req, res)=>{
    res.send("這是首頁")
})

app.listen(3000,()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})