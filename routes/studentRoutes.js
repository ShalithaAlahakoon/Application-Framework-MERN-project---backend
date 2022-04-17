const express = require('express');
// const { response } = require('../server');
const router = express.Router();
const Student = require('../models/Student');

//Add a new student
router.post('/add', (req, res) => {

    const itNumber = req.body.itNumber;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    let student = new Student({
        itNumber,
        name,
        email,
        password
    });
    //Save student to database
    student.save()
        .then(data => {
            res.status(200).json({ data: data, message: "Student added successfully" });
        })
        .catch(err => {
            res.status(500).json({ message: 'adding new student failed', error: err });
        });
});







module.exports = router;