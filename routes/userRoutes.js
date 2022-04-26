const express = require('express');
const router = express.Router();
const {registerUser,loginUser,getUser } = require('../controllers/userController');

const {protect} = require('../middleware/authmiddleware');

router.post('/add', registerUser);
router.post('/login', loginUser);
router.get('/getUser', protect, getUser);

module.exports = router;