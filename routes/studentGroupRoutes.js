const express = require('express');
const router = express.Router();
const StudentGroup = require('../models/StudentGroup');

//Add a new group
router.post('/add', (req, res) => {

    const name = req.body.name;
    const year = req.body.year;
    const semester = req.body.semester;
    const batch = req.body.batch;
    const student1 = req.body.student1;
    const student2 = req.body.student2;
    const student3 = req.body.student3;
    const student4 = req.body.student4;

    let studentGroup = new StudentGroup({
        name,
        year,
        semester,
        batch,
        student1,
        student2,
        student3,
        student4
    });
    //Save student to database
    studentGroup.save()
        .then(data => {
            res.status(200).json({ data: data, message: "Student group added successfully" });
        })
        .catch(err => {
            res.status(500).json({ message: 'adding new student group failed', error: err });
        });
});

module.exports = router;