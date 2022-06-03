const Supervisor = require('../models/Supervisor');
const asyncHandler = require('express-async-handler');

//@desc get all supervisors
//@route GET /api/supervisor/
//@access private

const getAllSupervisors = asyncHandler(async (req, res) => {
    const supervisors = await Supervisor.find();

    if (supervisors) {
        res.status(200).json({
            success: true,
            data: supervisors
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No supervisors found'
        });
        throw new Error('No supervisors found');
    }
});


//@desc get supervisor by id
//@route POST /api/supervisor/:id
//@access private

const getSupervisorById = asyncHandler(async (req, res) => {
    const supervisor = await Supervisor.findById(req.params.id);

    if (supervisor) {
        res.status(200).json({
            success: true,
            data: supervisor
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'No supervisor found'
        });
        throw new Error('No supervisor found');
    }
});

//@desc register supervisor
//@route POST /api/supervisor/add
//@access public

const registerSupervisor = asyncHandler(async (req, res) => {

    const { name, email, idNumber, phoneNumber, address, department, researchArea,type} = req.body;



    if (!name || !email || !idNumber || !phoneNumber || !address || !department || !researchArea || !type) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if supervisor already exists
    const supervisor = await Supervisor.findOne({ email });

    //if supervisor exists
    if (supervisor) {
        return res.status(400).json({
            success: false,
            message: 'Supervisor already exists with this email'
        });
    }

    //create supervisor
    const newSupervisor = new Supervisor({
        name,
        email,
        idNumber,
        phoneNumber,
        address,
        department,
        researchArea,
        type
    });

    //save supervisor
    await newSupervisor.save();

    if (newSupervisor) {
        res.status(201).json({
            success: true,
            data: newSupervisor
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'Supervisor not created'
        });
        throw new Error('Supervisor not created');
    }

});

//@desc update supervisor
//@route POST /api/supervisor/update/:id
//@access private

const updateSupervisor = asyncHandler(async (req, res) => {

    const supervisor = await Supervisor.findById(req.params.id);

    if (!supervisor) {
        return res.status(400).json({
            success: false,
            message: 'No supervisor found'
        });
    } else {
        const { name, email, idNumber, phoneNumber, address, department, researchArea, type } = req.body;

        supervisor.name = name;
        supervisor.email = email;
        supervisor.idNumber = idNumber;
        supervisor.phoneNumber = phoneNumber;
        supervisor.address = address;
        supervisor.department = department;
        supervisor.researchArea = researchArea;
        supervisor.type = type;

        await supervisor.save();

        res.status(200).json({
            success: true,
            data: supervisor
        });
    }
});

//@desc delete supervisor
//@route POST /api/supervisor/delete/:id
//@access private

const deleteSupervisor = asyncHandler(async (req, res) => {

    const supervisor = await Supervisor.findById(req.params.id);

    if (!supervisor) {
        return res.status(400).json({
            success: false,
            message: 'No supervisor found'
        });
    } else {
        await supervisor.remove();

        res.status(200).json({
            success: true,
            message: 'Supervisor Successfully Deleted'
        });
    }
});



module.exports = {
    registerSupervisor,
    getAllSupervisors,
    getSupervisorById,
    updateSupervisor,
    deleteSupervisor
};
