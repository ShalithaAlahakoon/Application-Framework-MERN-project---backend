const express = require('express');
const staff = require('../models/staff');


const router = express.Router();

//create posts
router.post('/staff/save',(req,res)=>{
    let newStaffMember = new staff(req.body);
    newStaffMember.save((err)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"staff member saved successfully"
        });
    });
});

//get posts
router.get('/staff', (req,res)=>{
    staff.find().exec((err,staff)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:staff
    });
  });
});

//update
router.put('/staff/update/:id', (req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id , {
            $set:req.body
        },
        (err,staff)=>{
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
router.delete('/staff/delete/:id', (req,res)=> {
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedStaffMem)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
            return res.status(200).json({
                message:"Delete Successfull",deletedStaffMem
            });
        }
    });
});

module.exports = router;
