import express from 'express';
import moment from 'moment';
import db from '../db2.mjs';
import multer from "multer";
const router = express.Router();
const upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('導向有今天日期的網址');
  let time = moment().format("YYYY-MM-DD");
  res.redirect("/expense/d/" + time)
});

router.get("/d/:date", async function(req, res ,next){
  // res.send('讀取指定日期的消費');
  let date = req.params.date;

  let [sort] = await db.execute("SELECT * FROM `sort`").catch(() => {
    return [undefined];
  })

  let [dateData] =await db.execute("SELECT * FROM `expense` WHERE `date` = ?",
  [date]).catch(() => {
    return [undefined];
  })
  
  if(sort && dateData){
    res.render("index", {date, sort, dateData});
  }else{
    res.send("發生錯誤")
  }

})

router.post("/", async (req, res ,next) => {
  let title = req.body.title;
  let sort = parseInt(req.body.sort);
  let money = parseInt(req.body.money);
  let date = req.body.date;
  await db.execute(
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);",
    [title, sort, money, date]
  ).then(()=>{
    res.redirect("/expense/d/" + date);
  }).catch(()=>{
    res.send("發生錯誤")
  })

  // res.send('新增指定日期的消費');
})

router.put("/", upload.none(), async (req, res ,next) => {
  // res.send('修改指定日期的消費');
  let title = req.body.title;
    let sort = parseInt(req.body.sort, 10);
    let money = parseInt(req.body.money, 10);
    let date = req.body.date;
    let id = parseInt(req.body.id, 10);
  let aaaa = await db.execute(
    "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;",
  [title, sort, money, date, id]).then(() => {
    return 1;
  }).catch(() => {
    return 0;
  })
  res.json({aaaa})
})

router.delete("/", upload.none(), async (req, res ,next) => {
  // res.send("刪除指定日期的消費")
  let aaaa =await db.execute(
    "DELETE FROM expense WHERE `expense`.`id` = ?;",
      [parseInt(req.body.id, 10)]
  ).then(() => {
    return 1;
  }).catch(() => {
    return 0;
  });
  res.json({aaaa})
})

export default router;
