import {rename, renameSync} from "fs";

// rename("./連續寫入測試.txt", "./詩.txt", (error)=>{
// rename("./詩.txt", "./text/詩.txt", (error)=>{
//     if(error){
//         console.log("操作失敗");
//         return false;
//     }
//     console.log("操作成功");
// })
renameSync("./text/詩.txt", "./text/詩2.txt");