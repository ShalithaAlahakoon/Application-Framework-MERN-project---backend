const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id :{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
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
