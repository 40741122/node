const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.from("hello");
console.log(buf2);

const buf3 = Buffer.from("你好", "utf8");
console.log(buf3);