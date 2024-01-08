import {sep, resolve, parse, basename, dirname, extname} from "path";
import {fileURLToPath} from "url";

console.log(sep);
console.log(resolve("test.txt"));
console.log(parse(import.meta.url));
console.log(parse(fileURLToPath(import.meta.url)));
console.log(basename("/Users/test/Desktop/demo.txt"));
console.log(dirname("/Users/test/Desktop/demo.txt"));
console.log(extname("/Users/test/Desktop/demo.txt"));