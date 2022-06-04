const Mark = require('../models/PresentationMarks');
const asyncHandler = require('express-async-handler');
const PresentationMarks = require('../models/PresentationMarks');

const giveMarks = asyncHandler(async (req, res) => {

    const { groupId, member1Id, member1Slide, member1Demo, member1Total, member2Id, member2Slide, member2Demo, member2Total, member3Id, member3Slide, member3Demo, member3Total, member4Id, member4Slide, member4Demo, member4Total} = req.body;

    if (!groupId || !member1Id || !member1Slide || !member1Demo || !member1Total || !member2Id || !member2Slide || !member2Demo || !member2Total || !member3Id || !member3Slide || !member3Demo || !member3Total || !member4Id || !member4Slide || !member4Demo || !member4Total) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if student already exists
    const presentationMarks = await PresentationMarks.findOne({ groupId });

    //if student exists
    if (presentationMarks) {
        return res.status(400).json({
            success: false,
            message: 'Marks already exists with this email'
        });
    }

    //create student
    const newMark = new PresentationMarks({
        groupId, 
        member1Id, 
        member1Slide, 
        member1Demo, 
        member1Total, 
        member2Id, 
        member2Slide, 
        member2Demo, 
        member2Total, 
        member3Id, 
        member3Slide, 
        member3Demo, 
        member3Total, 
        member4Id, 
        member4Slide, 
        member4Demo, 
        member4Total
    });

    //save student
    await newMark.save();

    if (newMark) {
        res.status(201).json({
            success: true,
            data: newMark
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'Marks not added'
        });
        throw new Error('Marks not added');
    }

});

module.exports = {
    giveMarks
};