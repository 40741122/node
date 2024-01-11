import express from 'express';
import {dirname, resolve, join, extname} from 'path';
import {fileURLToPath} from 'url';
import multer from 'multer';
import {renameSync} from 'fs';

const __dirname= dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, resolve(__dirname, "public/upload"));
    },
    filename: function(req, file, cb){
        if(!req.timestamp){
            req.timestamp = Date.now();
            req.index = 0;
        }else{
            req.index++;
        }
        let newName = (req.timestamp + req.index) + extname(file.originalname);
        cb(null, newName);
    }
});

const upload =multer({storage: storage});

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.use('/bootstrap', express.static(join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(join(__dirname, 'node_modules/jquery/dist')));

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.get("/form1", (req, res)=>{
    res.render("form1");
})

app.get("/form2", (req, res)=>{
    res.render("form2");
})

app.get("/form3", (req, res)=>{
    res.render("form3");
})

app.post("/upload1", upload.single("myFile"), (req, res)=>{
    res.json({body: req.body, file: req.file})
})

app.listen(3000, ()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})