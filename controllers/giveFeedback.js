const TopicFeeback = require('../models/TopicFeedback');
const asyncHandler = require('express-async-handler');


const giveFeedback = asyncHandler(async (req, res) => {

    const { groupId, mark , comment} = req.body;

    if (!groupId || !mark || !comment) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if student already exists
    const topicFeedback = await TopicFeeback.findOne({ groupId });

    //if student exists
    if (topicFeedback) {
        return res.status(400).json({
            success: false,
            message: 'Feedback already exists with this id'
        });
    }

    //create student
    const newFeedback = new TopicFeeback({
        groupId, 
        mark,
        comment
    });

    //save student
    await newFeedback.save();

    if (newFeedback) {
        res.status(201).json({
            success: true,
            data: newFeedback
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
    giveFeedback
};