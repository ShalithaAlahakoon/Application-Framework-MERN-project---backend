
//@desc register user
//@route POST /api/user
//@access public

const registerUser = (req, res) => {
    res.json({message: 'User registered'});
}

//@desc Authenticate user
//@route POST /api/user/login
//@access public

const loginUser = (req, res) => {
    res.json({message: 'User login'});
}

//@desc get user data
//@route GET /api/user/getUser
//@access public

const getUser = (req, res) => {
    res.json({message: 'User data'});
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}

