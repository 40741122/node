import express from 'express';
import {dirname, resolve, join, extname} from 'path';
import {fileURLToPath} from 'url';
import formidable from 'formidable';

const __dirname= dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")))

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

app.post("/upload1", (req, res, next)=>{
    const form = formidable({
        uploadDir: resolve(__dirname, "public/upload"),
        keepExtensions: true
    });

    form.parse(req, (error, fields, files)=>{
        if(error){
            next(error);
            return false;
        }
        res.json({fields, files});
    });
})

app.post("/upload2", (req, res, next)=>{
    const form = formidable({
        uploadDir: resolve(__dirname, "public/upload"),
        keepExtensions: true,
        multiples: true
    });

    form.parse(req, (error, fields, files)=>{
        if(error){
            next(error);
            return false;
        }
        res.json({fields, files});
    });
})

app.listen(3000, ()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})