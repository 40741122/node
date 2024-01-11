import express from 'express';
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("這是首頁")
})

router.get("/home", (req, res)=>{
    res.send("前台首頁")
})

router.get("/search", (req, res)=>{
    res.send("搜尋")
})

export default router;