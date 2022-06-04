const express = require('express');
const router = express.Router();
const {
    registerSupervisor,
    getAllSupervisors,
    getSupervisorById,
    updateSupervisor,
    deleteSupervisor
} = require('../controllers/supervisorController');

router.get('/', getAllSupervisors);
router.get('/:id', getSupervisorById);
router.post('/add', registerSupervisor);
router.patch('/update/:id', updateSupervisor);
router.delete('/delete/:id', deleteSupervisor);

module.exports = router;


