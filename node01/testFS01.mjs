import {writeFile} from "fs";

const file1 = "./測試寫入ESM.txt";
const content1 = "松下問童子，言師採藥去";
console.log("1 寫入開始");
writeFile(file1, content1, {flag: "a"}, (error)=>{
    if(error){
        console.log("2 寫入失敗");
        return false;
    }
    console.log("2 寫入成功");
});
console.log("3 測試用字串");