import {mkdir, readdir, rmdir} from "fs";

// mkdir("./html", (error)=>{
// mkdir("./a/b/c", {recursive: true} ,(error)=>{
//     if(error){
//         console.log("建立資料夾失敗");
//     }else{
//         console.log("建立資料夾成功");
//     }
// })
// readdir("./", (error, data)=>{
//     if(error){
//         console.log("讀取資料夾失敗");
//     }else{
//         console.log("讀取資料夾成功");
//         console.log(data);
//     }
// })

rmdir("./a", {recursive: true} ,(error)=>{
    if(error){
        console.log("刪除資料夾失敗");
        console.log(error);
    }else{
        console.log("刪除資料夾成功");
    }
})