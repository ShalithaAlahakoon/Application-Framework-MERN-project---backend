const express = require('express');
const router = express.Router();
const {
    getAllResearchTopics,
    getResearchTopicById,
    registerResearchTopic,
    updateResearchTopic,
    deleteResearchTopic
} = require('../controllers/researchTopicController');

router.get('/', getAllResearchTopics);
router.get('/:id', getResearchTopicById);
router.post('/add', registerResearchTopic);
router.put('/update/:id', updateResearchTopic);
router.delete('/delete/:id', deleteResearchTopic);

module.exports = router;