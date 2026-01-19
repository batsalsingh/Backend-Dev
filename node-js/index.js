
// const math=require('./math');
// console.log(math.add(1, 4));
// console.log(math.remove(4, 1));

// const math=require('./math');
// console.log(math.area(2,4));
// console.log(math.remove(4,2));

const fs=require("fs");
fs.writeFileSync("./text.txt","This is sync file content");

// const file=fs.readFileSync("text.txt","utf-8");

const asyncfile=fs.readFile("text.txt","utf-8",(err , data)=>{
    if (err){
        console.log("error in file handling",err)
    }
    else{
        console.log("file reading successfull",data)
    }
})
console.log(asyncfile);