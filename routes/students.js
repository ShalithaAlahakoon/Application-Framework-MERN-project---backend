const express = require('express');
const students = require('../models/students');


const router = express.Router();

//create posts
router.post('/student/save',(req,res)=>{
    let newStudent = new students(req.body);
    newStudent.save((err)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student saved successfully"
        });
    });
});

//get posts
router.get('/students', (req,res)=>{
    students.find().exec((err,students)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:students
    });
  });
});

//update
router.put('/student/update/:id', (req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id , {
            $set:req.body
        },
        (err,student)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete posts
router.delete('/student/delete/:id', (req,res)=> {
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedStudent)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
            return res.status(200).json({
                message:"Delete Successfull",deletedStudent
            });
        }
    });
});

module.exports = router;
