const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    StudentID: {
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    ContactNumber:{
        type:String,
        required:true
    },
    GraduateYear:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Students',StudentSchema);