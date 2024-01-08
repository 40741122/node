const fs = require("fs");

const file1 = "./測試寫入.txt";
const content1 = "松下問童子，言師採藥去";
fs.writeFile(file1, content1, (error)=>{
    if(error){
        console.log("寫入失敗");
        return false;
    }
    console.log("寫入成功");
});