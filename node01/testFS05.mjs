import {readFile} from "fs";

readFile("./連續寫入測試.txt", (error, data)=>{
    if(error){
        console.log("讀入失敗");
        return false;
    }
    console.log("讀入成功");
    console.log(data.toString());
});