let a;
console.log("開始");


setTimeout((aaa)=>{
    a = 10;
    console.log("事件進行中");
    aaa();
},2000, end);



function end(){
    console.log("結束 a+a=" + (a+a));
}
