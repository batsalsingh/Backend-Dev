// const express = require('express');
// const app = express();
// const port = 8000;
// const students=[
//     {id:1, name:"Alice",branch:"CSE"},
//     {id:2, name:"Bob",branch:"ECE"},
//     {id:3, name:"Charlie",branch:"IT"}
// ]
// app.get('/', (req, res) => {
//   res.send('Welcome to the Express.js Backend!');
// }
// )
// app.get ('user', (req, res) => {
//   res.send('User');
// }                                       
// )
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



// const express = require('express');
// const app =express();
// const port=8000;

// const student=[
//     {id:1,name:"shubham",branch:"cse"},
//     {id:2,name:"batsal",branch:"ece"},
//     {id:3,name:"akh1kyro",branch:"diploma"}
// ]

// app.get("/",(req,res)=>{
//     res.send("welcome to home page")
// })

// app.get("/user",(req,res)=>{
//     res.send("user")
// })

// app.get("/student",(req,res)=>{
//     res.json(student)
// })

// app.get("/student/:id")

// app.listen(port,()=>{
//     console.log(`server is running on ${port}`)
// })


// app.get("/student/:id",(req,res)=>{
//     const id = req.params.id;


//     const arrayIndex = student.findIndex[(s) => s.id == id];

//     const data = student[arrayIndex];
//     res.json(data);
// })
// app.get("/student/:id",(req,res)=>{
//     const branch = req.query.branch;
//     const foundStudents = student.filter((s) => s.branch == branch);
//     res.json(foundStudents);
// });

// const express = require('express');
// const app = express();
// const port = 8000;

// const student = [
//     { id: 1, name: "shubham", branch: "cse" },
//     { id: 2, name: "batsal", branch: "ece" },
//     { id: 3, name: "akh1kyro", branch: "diploma" }
// ];

// app.get("/", (req, res) => {
//     res.send("welcome to home page");
// });

// app.get("/user", (req, res) => {
//     res.send("user");
// });

// app.get("/student", (req, res) => {
//     res.json(student);
// });

// // ✅ Get student by ID
// app.get("/student/:id", (req, res) => {
//     const id = parseInt(req.params.id);

//     const data = student.find((s) => s.id === id);

//     if (!data) {
//         return res.status(404).json({ message: "Student not found" });
//     }

//     res.json(data);
// });

// app.listen(port, () => {
//     console.log(`server is running on ${port}`);
// // });
// const express = require("express");
// const fs = require("fs");   // ✅ Added this line
// const app = express();
// const port = 8000;

// app.use(express.json());

// const FILE_PATH = "student.json";

// let student = [];

// try {
//     const data = fs.readFileSync(FILE_PATH, "utf-8");
//     student = JSON.parse(data);
// } catch (err) {
//     student = [];
// }

// app.get("/", (req, res) => {
//     res.send("welcome to home page");
// });

// app.get("/user", (req, res) => {
//     res.send("user");
// });

// app.get("/student", (req, res) => {
//     res.json(student);
// });

// app.get("/student/:id", (req, res) => {
//     const id = parseInt(req.params.id);

//     const found = student.find(s => s.id === id);

//     if (!found) {
//         return res.status(404).json({ error: "Student not found" });
//     }

//     res.json(found);
// });

// app.get("/student-branch", (req, res) => {
//     const branch = req.query.branch;
//     const foundStudents = student.filter(s => s.branch === branch);
//     res.json(foundStudents);
// });

// // app.put("/student/:id", (req, res) => {
// //     const id = parseInt(req.params.id);
// //     const newId = parseInt(req.body.newId);

// //     const studentToUpdate = student.find(s => s.id === id);

// //     if (!studentToUpdate) {
// //         return res.status(404).json({ error: "Student not found" });
// //     }

// //     const idExists = student.find(s => s.id === newId);

// //     if (idExists) {
// //         return res.status(400).json({ error: "ID already exists" });
// //     }

// //     studentToUpdate.id = newId;

// //     fs.writeFileSync(FILE_PATH, JSON.stringify(student, null, 2));

// //     res.json({
// //         message: "ID updated successfully",
// //         updatedStudent: studentToUpdate
// //     });
// // });
// app.put("/student/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const { id: newId, name, branch } = req.body;

//     const students = readData();

//     const index = students.findIndex(s => s.id === id);

//     if (index === -1) {
//         return res.status(404).json({ error: "Student not found" });
//     }

//     // If user wants to change ID, check if it already exists
//     if (newId && newId !== id) {
//         const idExists = students.find(s => s.id === newId);
//         if (idExists) {
//             return res.status(400).json({ error: "ID already exists" });
//         }
//     }

//     // Update fields properly
//     students[index] = {
//         ...students[index],
//         id: newId ?? students[index].id,
//         name: name ?? students[index].name,
//         branch: branch ?? students[index].branch
//     };

//     writeData(students);

//     res.json({
//         message: "Student updated successfully",
//         updatedStudent: students[index]
//     });
// });

// app.post("/student", (req, res) => {
//     const { id, name, branch } = req.body;

//     // ✅ Better validation
//     if (id == null || !name || !branch) {
//         return res.status(400).json({ error: "All fields required (id, name, branch)" });
//     }

//     const exists = student.find(s => s.id === id);

//     if (exists) {
//         return res.status(400).json({ error: "Student ID already exists" });
//     }

//     const newStudent = { id, name, branch };
//     student.push(newStudent);

//     fs.writeFileSync(FILE_PATH, JSON.stringify(student, null, 2));

//     res.status(201).json({
//         message: "Student added successfully",
//         newStudent
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

app.use(express.json());

const FILE_PATH = "student.json";



function readData() {
    try {
        const data = fs.readFileSync(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function writeData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}



app.get("/", (req, res) => {
    res.send("welcome to home page");
});

app.get("/student", (req, res) => {
    const students = readData();
    res.json(students);
});

app.get("/student/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const students = readData();

    const found = students.find(s => s.id === id);

    if (!found) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json(found);
});



app.post("/student", (req, res) => {
    const { id, name, branch } = req.body;

    if (id == null || !name || !branch) {
        return res.status(400).json({ error: "All fields required (id, name, branch)" });
    }

    const students = readData();

    const exists = students.find(s => s.id === id);
    if (exists) {
        return res.status(400).json({ error: "Student ID already exists" });
    }

    const newStudent = { id, name, branch };
    students.push(newStudent);

    writeData(students);

    res.status(201).json({
        message: "Student added successfully",
        newStudent
    });
});



app.put("/student/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { id: newId, name, branch } = req.body;

    const students = readData();

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Student not found" });
    }

 
    if (newId != null && newId !== id) {
        const idExists = students.find(s => s.id === newId);
        if (idExists) {
            return res.status(400).json({ error: "ID already exists" });
        }
    }

    students[index] = {
        ...students[index],
        id: newId ?? students[index].id,
        name: name ?? students[index].name,
        branch: branch ?? students[index].branch
    };

    writeData(students);

    res.json({
        message: "Student updated successfully",
        updatedStudent: students[index]
    });
});

app.delete("/student/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const students = readData();

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Student not found" });
    }

    const deletedStudent = students[index];

   
    students.splice(index, 1);

  
    writeData(students);

    res.json({
        message: "Student deleted successfully",
        deletedStudent
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
