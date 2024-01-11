import express from "express";
import front from './routes/front.mjs';
import back from './routes/back.mjs';
import users from './routes/users.mjs';

const app = express();

app.use(front);
app.use(back);
app.use("/users", users);

app.listen(3000, ()=>{
    console.log("伺服器已啟用 https://localhost:3000");
})