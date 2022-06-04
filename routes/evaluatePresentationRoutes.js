const express = require('express');
const router = express.Router();

const {
    giveMarks
} = require('../controllers/giveMarks');

router.post('/add', giveMarks);

module.exports = router;