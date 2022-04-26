const express = require('express');
const router = express.Router();
const {
    registerStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/add', registerStudent);
router.patch('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;






