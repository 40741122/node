import express from 'express';
import moment from 'moment';
import connection from '../db.mjs';
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

  let sort = await getSort().then((data) => {
    return data.sort;
  }).catch((error) => {
    return undefined;
  });

  let dateData = await getDateData(date).then((data)=>{
    return data;
  }).catch((err)=>{
  });
  
  if(sort && dateData){
    res.render("index", {date, sort, dateData});
  }else{
    res.send("發生錯誤")
  }

})

router.post("/", (req, res ,next) => {
  let title = req.body.title;
  let sort = parseInt(req.body.sort);
  let money = parseInt(req.body.money);
  let date = req.body.date;
  connection.execute(
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);",
    [title, sort, money, date],
    (error, results)=>{
      res.redirect("/expense/d/" + date);
    }
  )

  // res.send('新增指定日期的消費');
})

router.put("/", upload.none(), async (req, res ,next) => {
  // res.send('修改指定日期的消費');
  let aaaa = await updateData(req.body).then(() => {
    return 1;
  }).catch(() => {
    return 0;
  })
  res.json({aaaa})
})

router.delete("/", upload.none(), async (req, res ,next) => {
  // res.send("刪除指定日期的消費")
  let aaaa =await deleteData(req.body).then(() => {
    return 1;
  }).catch(() => {
    return 0;
  });
  res.json({aaaa})
})

function getSort(){
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM `sort`',
     (error, results)=>{
        if(error){
          reject({error});
          return false;
        }
        let sort = results.map((item)=>{
          return {id: item.id, name: item.name};
        });
        resolve({sort});
      }
    );
  });
}

function getDateData(date){
  return new Promise((resolve, reject) => {
    connection.execute(
      "SELECT * FROM `expense` WHERE `date` = ?",
      [date],
      (error, results)=>{
        if(error){
          reject(error);
          return false;
        }
        resolve(results);
      }
    );
  });
}

function updateData(data){
  return new Promise((resolve, reject) => {
    let title = data.title;
    let sort = parseInt(data.sort, 10);
    let money = parseInt(data.money, 10);
    let date = data.date;
    let id = parseInt(data.id, 10);
    connection.execute(
      "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;",
      [title, sort, money, date, id],
      ((error, results) => {
        if(error){
          reject(error);
          return false;
        }
        resolve(results);
      })
    )
  })
}

function deleteData(data){
  return new Promise((resolve, reject) => {
    let id = parseInt(data.id, 10);
    connection.execute(
      "DELETE FROM expense WHERE `expense`.`id` = ?;",
      [id],
      ((error, results) => {
        if(error){
          reject(error);
          return false;
        }
        resolve(results);
      })
    )
  })
}

export default router;
