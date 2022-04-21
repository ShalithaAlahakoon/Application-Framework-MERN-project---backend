const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');


//@desc register user
//@route POST /api/user
//@access public

const registerUser = asyncHandler(async(req, res) => {

    const { name, email, password, role } = req.body;

    if(!name || !email || !password || !role) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    res.json({message: 'User registered'});
}
)
//@desc Authenticate user
//@route POST /api/user/login
//@access public

const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'User login'});
}
)
//@desc get user data
//@route GET /api/user/getUser
//@access public

const getUser = asyncHandler( async(req, res) => {
    res.json({message: 'User data'});
}
)
module.exports = {
    registerUser,
    loginUser,
    getUser
}

