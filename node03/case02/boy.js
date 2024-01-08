function sayMyName(){
    console.log("Kenny");
}

function sayMyCountry(){
    console.log("Taiwan");
}

// 第一種導出的方式
// module.exports = {
//     sayMyName: sayMyName,
//     sayMyCountry: sayMyCountry
// };

// 第二種方式
exports.sayMyName = sayMyName;
exports.sayMyCountry = sayMyCountry;