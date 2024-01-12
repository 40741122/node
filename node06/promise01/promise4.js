let t1 = () => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("t1執行結束");
            resolve(55688);
        },2000)
    });
};

let t2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t2 執行結束");
            reject();
        }, 4000)
    });
};

let t3 = () => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("t3執行結束");
            resolve();
        },1000)
    });
};

// (function(){})();

(async()=>{
    let a1 = await t1();
    console.log(a1);
    await t2().catch(()=>{console.log("error");});
    await t3();
})();

// async function dodo(){
//     await t1();
//     await t2();
//     await t3();
// }

// dodo();