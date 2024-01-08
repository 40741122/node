import {writeFileSync} from "fs";

const file1 = "./測試寫入.txt";
const content1 = "松下問童子，言師採藥去";
console.log("寫入之前");
try{
    writeFileSync(file2, content1);
    console.log("寫入成功");
}catch(error){
    console.log("寫入失敗");
}
console.log("寫入之後");