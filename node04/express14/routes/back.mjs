import express from 'express';
const router = express.Router();

router.get("/admin", (req, res)=>{
    res.send("管理後台")
})

router.get("/setting", (req, res)=>{
    res.send("網站設定")
})

export default router;