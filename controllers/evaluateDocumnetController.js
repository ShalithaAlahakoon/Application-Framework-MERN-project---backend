const DocumentMark = require('../models/DocumentMark');
const asyncHandler = require('express-async-handler');


const evaluateDocument = asyncHandler(async (req, res) => {

    const { groupId, mark } = req.body;

    if (!groupId || !mark ) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if student already exists
    const documentMark = await DocumentMark.findOne({ groupId });

    //if student exists
    if (documentMark) {
        return res.status(400).json({
            success: false,
            message: 'Feedback already exists with this id'
        });
    }

    //create student
    const newDocumentMark = new DocumentMark({
        groupId, 
        mark,
       
    });

    //save student
    await newDocumentMark.save();

    if (newDocumentMark) {
        res.status(201).json({
            success: true,
            data: newDocumentMark
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'Feedback not added'
        });
        throw new Error('Feedback not added');
    }

});

module.exports = {
    evaluateDocument
};