import ejs from "ejs";
import {readFileSync} from 'fs';

let name = "Ben";
let str = "Hello world !";
let template = readFileSync("./template01.html").toString();
let result = ejs.render(template, {str, name});

console.log(result);

