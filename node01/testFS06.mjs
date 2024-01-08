import {readFileSync} from "fs";

let data = readFileSync("./連續寫入測試.txt");
console.log(data.toString());