import {unlink, rmSync} from "fs";

// unlink("./測試寫入.txt", (error)=>{
//     if(error){
//         console.log("刪除失敗");
//         console.log(error);
//         return false;
//     }
//     console.log("刪除成功");
// })
rmSync("./測試寫入2.txt");