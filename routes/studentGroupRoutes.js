const express = require('express');
const router = express.Router();
const {
    getAllStudentGroups,
    getStudentGroupById,
    registerStudentGroup,
    updateStudentGroup,
    deleteStudentGroup
} = require('../controllers/studentGroupController');

router.get('/', getAllStudentGroups);
router.get('/:id', getStudentGroupById);
router.post('/insert', registerStudentGroup);
router.patch('/update/:id', updateStudentGroup);
router.delete('/delete/:id', deleteStudentGroup);


module.exports = router;