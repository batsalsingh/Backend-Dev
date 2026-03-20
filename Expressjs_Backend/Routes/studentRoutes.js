const express = require('express');
const router = express.Router();

const {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../Controllers/studentController');

router.get('/', getAllStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);     // ✅ UPDATE
router.delete('/:id', deleteStudent);  // ✅ DELETE

module.exports = router;