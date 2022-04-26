const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');


const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        
        token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if (!token) {
        return next(
            res.status(401).json({
                success: false,
                message: 'You are not logged in!'
            })
        );
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select('-password');

        next();
    } catch (err) {
        return next(
            res.status(401).json({
                success: false,
                message: 'Token is not valid'
            })

        );
    }
})

module.exports = {protect};
