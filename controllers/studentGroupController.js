const studentGroupModel = require('../models/studentGroup');
const asyncHandler = require('express-async-handler');

//@desc get all students groups
//@route POST /api/group/
//@access private

const getAllStudentGroups = asyncHandler(async (req, res, next) => {
    const studentGroups = await studentGroupModel.find();
    res.status(200).json({
        success: true,
        count: studentGroups.length,
        data: studentGroups
    });
});

//@desc get  students group by id
//@route POST /api/group/:id
//@access private

const getStudentGroupById = asyncHandler(async (req, res, next) => {
    const studentGroup = await studentGroupModel.findById(req.params.id);
    if (!studentGroup) {
        return next(new ErrorResponse(`Student group not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: studentGroup
    });
});

//@desc register students group
//@route POST /api/group/add
//@access public

const registerStudentGroup = asyncHandler(async (req, res, next) => {

    const { name, year, semester, batch, student1, student2, student3, student4 } = req.body;

    //checking data
    if (!name || !year || !semester || !batch || !student1 || !student2 || !student3 || !student4) {
        return next(new ErrorResponse(`Please enter all fields`, 400));
    }

    //check if student group already exists
    const studentGroup = await studentGroupModel.findOne({ name });

    //if student group exists
    if (studentGroup) {
        return next(new ErrorResponse(`Student group already exists with this name`, 400));
    }

    //create student group
    const newStudentGroup = await studentGroupModel.create({
        name,
        year,
        semester,
        batch,
        student1,
        student2,
        student3,
        student4
    });

    //save student group
    await newStudentGroup.save();

    if (newStudentGroup) {
        res.status(200).json({
            success: true,
            data: newStudentGroup
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No student group Created'
        });
        throw new Error('No student group Created');
    }

});

//@desc update students group
//@route POST /api/group/update/:id
//@access private

const updateStudentGroup = asyncHandler(async (req, res, next) => {
    const studentGroup = await studentGroupModel.findByIdAndUpdate(req.params.id);

    if (!studentGroup) {
        return res.status(400).json({
            success: false,
            message: 'No student  Group found'
        });
    } else {
        const { name, year, semester, batch, student1, student2, student3, student4 } = req.body;

        studentGroup.name = name;
        studentGroup.year = year;
        studentGroup.semester = semester;
        studentGroup.batch = batch;
        studentGroup.student1 = student1;
        studentGroup.student2 = student2;
        studentGroup.student3 = student3;
        studentGroup.student4 = student4;

        await studentGroup.save();

        res.status(200).json({
            success: true,
            data: studentGroup
        });
    }
});

//@desc delete students group
//@route POST /api/group/delete/:id
//@access private

const deleteStudentGroup = asyncHandler(async (req, res, next) => {
    const studentGroup = await studentGroupModel.findById(req.params.id);

    if (!studentGroup) {
        return res.status(400).json({
            success: false,
            message: 'No student Group found'
        });
    } else {
        await studentGroup.remove();

        res.status(200).json({
            success: true,
            message: 'Student Group deleted'
        });
    }
});






module.exports = {
    getAllStudentGroups,
    getStudentGroupById,
    registerStudentGroup,
    updateStudentGroup,
    deleteStudentGroup

}