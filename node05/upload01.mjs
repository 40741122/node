import express from 'express';
import {dirname, resolve, join, extname} from 'path';
import {fileURLToPath} from 'url';
import multer from 'multer';
import {renameSync} from 'fs';

const __dirname= dirname(fileURLToPath(import.meta.url));

const upload = multer({dest: resolve(__dirname, "public")});

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
    let timestamp = Date.now();
    let newFileName = timestamp + extname(req.file.originalname);
    renameSync(req.file.path, resolve(__dirname, "public/upload", newFileName))
    res.json({body: req.body, file: req.file})
})

app.post("/upload2", upload.array("myFile", 3), (req, res)=>{
    let myFiles = [];
    let timestamp = Date.now();
    req.files.forEach((file, index)=>{
        let newFileName = (timestamp+index) + extname(req.files[index].originalname);
        renameSync(req.files[index].path, resolve(__dirname, "public/upload", newFileName));
        myFiles.push(newFileName);
    });

    req.body.myFiles = myFiles;
    res.json({body: req.body, file: req.files})
})

app.post("/upload3", upload.array("myFile[]", 3), (req, res)=>{
    let myFiles = [];
    let timestamp = Date.now();
    req.files.forEach((file, index)=>{
        let newFileName = (timestamp+index) + extname(req.files[index].originalname);
        renameSync(req.files[index].path, resolve(__dirname, "public/upload", newFileName));
        myFiles.push(newFileName);
    });

    req.body.myFiles = myFiles;
    res.json({body: req.body, file: req.files})
})

app.listen(3000, ()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})