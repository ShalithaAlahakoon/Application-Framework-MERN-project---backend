const express = require('express');
const markschema = require('../models/markschema');

const router = express.Router();

//create posts
router.post('/markschema/save',(req,res)=>{
    let newMarkSchema = new markschema(req.body);
    newMarkSchema.save((err)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"MarkSchema saved successfully"
        });
    });
});

//get posts
router.get('/markschemas', (req,res)=>{
    markschema.find().exec((err,markschema)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:markschema
    });
  });
});

//update
router.put('/markschema/update/:id', (req,res)=>{
    markschema.findByIdAndUpdate(
        req.params.id , {
            $set:req.body
        },
        (err,markschema)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully",
                data:markschema
            });
        }
    );
});

//delete posts
router.delete('/markschema/delete/:id', (req,res)=> {
    template.findByIdAndRemove(req.params.id).exec((err,deleteMarkSchema)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
            return res.status(200).json({
                message:"Delete Successfull",deleteMarkSchema
            });
        }
    });
});

module.exports = router;
