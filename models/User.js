const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    id:{
        type: String,
        required: [true, 'Please enter your SLIIT ID number']
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please your SLIIT email']
    },
    moboleNumber: {
        type: String,
        required: [true, 'Please enter a mobile']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    mobileNumber: {
        type: String,
        required: [true, 'Please add a mobile number']

    }
    // role: {
    //     type: String,
    //     required: [true, 'Please add a role']
    // }
},
{
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);
