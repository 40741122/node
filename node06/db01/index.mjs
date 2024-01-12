import connection from './db.mjs';
import express from 'express';


const app = express();

app.get("/", (req, res)=>{
    res.send("主頁")
})

app.get("/d/:id", (req, res)=>{
    let id = req.params.id;
    connection.execute(
    'SELECT * FROM `sort` WHERE `id` = ?',
    [id],
    (err, results, fields)=>{
        let sort = results.map(item=>{
            return{id: item.id, name: item.name}
        });
        res.json({results: sort})
    }
  );
})

app.listen(3000,()=>{
    console.log("伺服器已啟用 http://localhost:3000");
})

//   let id = 5;

//   connection.execute(
//     'SELECT * FROM `sort` WHERE `id` = ?',
//     [id],
//     (err, results, fields)=>{
//       console.log(results);
//       console.log(fields);
//     }
//   );