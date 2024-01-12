import express from 'express';
import moment from 'moment';
import connection from '../db.mjs';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('導向有今天日期的網址');
  let time = moment().format("YYYY-MM-DD");
  res.redirect("/expense/d/" + time)
});

router.get("/d/:date", function(req, res ,next){
  // res.send('讀取指定日期的消費');
  connection.execute(
    "SELECT * FROM `sort`",
    [],
    (error, results) => {
      console.log(results);
    }
  )
  let date = req.params.date;
  res.render("index", {date});
})

router.post("/", function(req, res ,next){
  res.send('新增指定日期的消費');
})

router.put("/", function(req, res ,next){
  res.send('修改指定日期的消費');
})

router.delete("/", function(req, res ,next){
  res.send('刪除指定日期的消費');
})

export default router;
