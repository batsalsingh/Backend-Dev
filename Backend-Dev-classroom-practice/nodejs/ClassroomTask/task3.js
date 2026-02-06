const fs = require("fs");

fs.copyFileSync("test.txt", "dest.txt");

fs.copyFile("test.txt", "new_test.txt", (err) => {
    if (err) {
        console.error("Error copying file:", err);
    } else {
        console.log("File copied successfully");
    }
});

// fs.copyFileSync("urgent.txt", "urgent_dest.txt");
// console.log("Urgent file copied successfully");
  
fs.unlink('dest.txt',(err)=>{
    if(err){
        console.log("error while deleting file",err,err)
    }
    else{
        console.log("file is deleted")
    }
})