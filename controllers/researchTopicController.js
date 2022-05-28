const ResearchTopic = require('../models/ResearchTopic');
const asyncHandler = require('express-async-handler');

//@desc get all research topics
//@route GET /api/researchTopic/
//@access private

const getAllResearchTopics = asyncHandler(async (req, res) => {
    const researchTopics = await ResearchTopic.find();

    if (researchTopics) {
        res.status(200).json({
            success: true,
            data: researchTopics
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No research topics found'
        });
        throw new Error('No research topics found');
    }
});

//@desc get research topic by id
//@route GET /api/researchTopic/:id
//@access private

const getResearchTopicById = asyncHandler(async (req, res) => {
    const researchTopic = await ResearchTopic.findById(req.params.id);

    if (researchTopic) {
        res.status(200).json({
            success: true,
            data: researchTopic
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No research topic found'
        });
        throw new Error('No research topic found');
    }
});

//@desc register research topic
//@route POST /api/researchTopic/add
//@access public

const registerResearchTopic = asyncHandler(async (req, res) => {

    const { topic, reaserchGroup, researchArea } = req.body;

    if (!topic || !reaserchGroup || !researchArea) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if research topic already exists
    const researchTopic = await ResearchTopic.findOne({ topic });

    //if research topic exists
    if (researchTopic) {
       return res.status(400).json({
            success: false,
            message: 'Research topic already exists'
        });
    }

    //if research topic does not exist
    const newResearchTopic = new ResearchTopic({
        topic,
        reaserchGroup,
        researchArea
    });

    const savedResearchTopic = await newResearchTopic.save();

    // const researchTopic = await ResearchTopic.create(req.body);

    if (savedResearchTopic) {
        return res.status(200).json({
            success: true,
            data: newResearchTopic
        });
    }
    else {

       return res.status(400).json({
            success: false,
            message: 'No research topic created'
        });
        
    }
});

//@desc update research topic
//@route PUT /api/researchTopic/update/:id
//@access public

const updateResearchTopic = asyncHandler(async (req, res) => {

    const researchTopic = await ResearchTopic.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (researchTopic) {
        return res.status(200).json({
            success: true,
            data: researchTopic
        });
    }
    else {
        return res.status(400).json({
            success: false,
            message: 'No research topic found'
        });
        throw new Error('No research topic found');
    }
});

//@desc delete research topic
//@route Delete /api/researchTopic/delete/:id
//@access private

const deleteResearchTopic = asyncHandler(async (req, res) => {
    
        const researchTopic = await ResearchTopic.findById(req.params.id);
    
        if (!researchTopic) {
            return res.status(400).json({
                success: false,
                message: 'No reserch topic found on this id'
            });
        } else {
            await researchTopic.remove();
    
            res.status(200).json({
                success: true,
                message: 'Reserch topic Successfully Deleted'
            });
        }
    });


module.exports = {
    getAllResearchTopics,
    getResearchTopicById,
    registerResearchTopic,
    updateResearchTopic,
    deleteResearchTopic
};



