const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');


//@desc register user
//@route POST /api/user
//@access public

const registerUser = asyncHandler(async(req, res) => {

    const { id, name, email, mobileNumber, password, password2 } = req.body;

    if(!id || !name || !email || !mobileNumber || !password || !password2) {
        return res.status(400).json({
            success: false,
            message: 'Please enter all fields'
        });
    }

    //check if user already exists
    const user = await User.findOne({ email });

    //if user exists
    if(user) {
        return res.status(400).json({
            success: false,
            message: 'User already exists'
        }); 
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = new User({
        id,
        name,
        email,
        mobileNumber,
        password: hashedPassword,
        password2: hashedPassword,
    });

    //save user
    await newUser.save();


    if(newUser) {
        res.status(201).json({
            success: true,
            data: newUser
        });
    } 
    else 
    {
        res.status(400).json({
            success: false,
            message: 'User not created'
        });
        throw new Error('User not created');


    }


    res.json({message: 'User registered'});
}
)
//@desc Authenticate user
//@route POST /api/user/login
//@access public

const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            success: true,
            data : user,
            token: genarateToken(user)
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'Invalid credentials'
        });
    }
    
}
)
//@desc get user data
//@route GET /api/user/getUser
//@access Private

const getUser = asyncHandler( async(req, res) => {
    const {id, name, email, mobileNumber} = await User.findById(req.user._id).select('-password');
    res.status(200).json({
        success: true,
        data: {
            id,
            name,
            email,
            mobileNumber
        }
    });
    
}
)

//genarate token
const genarateToken = (user) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}


module.exports = {
    registerUser,
    loginUser,
    getUser
}

