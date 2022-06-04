const express = require('express');
const router = express.Router();

const {
    giveFeedback
} = require('../controllers/giveFeedback');

router.post('/add', giveFeedback);

module.exports = router;