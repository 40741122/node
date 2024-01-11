import ejs from 'ejs';
import {readFileSync} from 'fs';
let user;

user={
    name: "Alex",
    img: "https://randomuser.me/api/portraits/men/46.jpg"
}

// if(user){
//     console.log(`
//     <img src ="${user.img}"><span>${user.name}</span>
//     <button>登出</button>
//     `);
// }else{
//     console.log(`<button>註冊</button> <button>登入</button>`);
// }

let template = readFileSync("./template03.html").toString();

let result = ejs.render(template, {user});

console.log(result.trim());