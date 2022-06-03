const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Supervisor = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    researchArea:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Supervisor', Supervisor);