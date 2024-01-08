import {writeFileSync} from "fs";
import {fileURLToPath} from "url";
import {dirname} from "path";
const __dirname = dirname(fileURLToPath(import.meta.url))
writeFileSync(__dirname+"/test.html", "test test 123")