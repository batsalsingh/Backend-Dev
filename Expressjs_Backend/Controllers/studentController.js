const fs = require('fs').promises;
const db = require('../modules/fileHandler');

// ✅ GET ALL STUDENTS
const getAllStudents = async (req, res) => {
    try {
        const studentsData = await db.readStudentsFromFile();

        if (!studentsData || studentsData.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }

        res.status(200).json(studentsData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const { name, branch } = req.body;

        if (!name || !branch) {
            return res.status(400).json({ message: 'Details are missing' });
        }

        let existingStudents = await db.readStudentsFromFile();
        if (!existingStudents) existingStudents = [];

        const newStudent = {
            id: existingStudents.length > 0 
                ? existingStudents[existingStudents.length - 1].id + 1 
                : 1,
            name,
            branch
        };

        existingStudents.push(newStudent);

        await db.writeStudentsToFile(existingStudents);

        res.status(201).json({
            message: 'Student created successfully',
            student: newStudent
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ UPDATE STUDENT
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, branch } = req.body;

        let students = await db.readStudentsFromFile();

        if (!students) {
            return res.status(404).json({ message: 'No students found' });
        }

        const index = students.findIndex(s => s.id == id);

        if (index === -1) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // update fields (only if provided)
        if (name) students[index].name = name;
        if (branch) students[index].branch = branch;

        await db.writeStudentsToFile(students);

        res.status(200).json({
            message: 'Student updated successfully',
            student: students[index]
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ DELETE STUDENT
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        let students = await db.readStudentsFromFile();

        if (!students) {
            return res.status(404).json({ message: 'No students found' });
        }

        const filteredStudents = students.filter(s => s.id != id);

        if (students.length === filteredStudents.length) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await db.writeStudentsToFile(filteredStudents);

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
};