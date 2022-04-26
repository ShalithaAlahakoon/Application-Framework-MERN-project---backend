const Student = require('../models/Student');
const asyncHandler = require('express-async-handler');

//@desc get all students
//@route POST /api/student/
//@access private

const getAllStudents = asyncHandler(async (req, res) => {
    const students = await Student.find();

    if (students) {
        res.status(200).json({
            success: true,
            data: students
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No students found'
        });
        throw new Error('No students found');
    }
});


//@desc get student by id
//@route POST /api/student/:id
//@access private

const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (student) {
        res.status(200).json({
            success: true,
            data: student
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No student found'
        });
        throw new Error('No student found');
    }
});

//@desc register student
//@route POST /api/student/add
//@access public

const registerStudent = asyncHandler(async (req, res) => {

    const { name, email, itNumber, phoneNumber, address } = req.body;

    if (!name || !email || !itNumber || !phoneNumber || !address) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if student already exists
    const student = await Student.findOne({ email });

    //if student exists
    if (student) {
        return res.status(400).json({
            success: false,
            message: 'Student already exists with this email'
        });
    }

    //create student
    const newStudent = new Student({
        name,
        email,
        itNumber,
        phoneNumber,
        address
    });

    //save student
    await newStudent.save();

    if (newStudent) {
        res.status(201).json({
            success: true,
            data: newStudent
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'Student not created'
        });
        throw new Error('Student not created');
    }

});

//@desc update student
//@route POST /api/student/update/:id
//@access private

const updateStudent = asyncHandler(async (req, res) => {

    const student = await Student.findById(req.params.id);

    if (!student) {
        return res.status(400).json({
            success: false,
            message: 'No student found'
        });
    } else {
        const { name, email, itNumber, phoneNumber, address } = req.body;

        student.name = name;
        student.email = email;
        student.itNumber = itNumber;
        student.phoneNumber = phoneNumber;
        student.address = address;

        await student.save();

        res.status(200).json({
            success: true,
            data: student
        });
    }
});

//@desc delete student
//@route POST /api/student/delete/:id
//@access private

const deleteStudent = asyncHandler(async (req, res) => {

    const student = await Student.findById(req.params.id);

    if (!student) {
        return res.status(400).json({
            success: false,
            message: 'No student found'
        });
    } else {
        await student.remove();

        res.status(200).json({
            success: true,
            message: 'Student Successfully Deleted'
        });
    }
});



module.exports = {
    registerStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
