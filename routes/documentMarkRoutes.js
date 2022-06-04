const express = require('express');
const router = express.Router();



const {
    evaluateDocument
} = require('../controllers/evaluateDocumnetController');



router.post('/add', evaluateDocument);



module.exports = router;