let isLog = process.argv[2].toLowerCase();

let clg = (content) => {
    if(isLog === "true"){
        console.log(content);
    }
};

clg(1+1)
clg("TEST")