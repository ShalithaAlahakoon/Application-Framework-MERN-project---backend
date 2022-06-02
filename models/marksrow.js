const mongoose = require('mongoose');
const MarksRowSchema = new mongoose.Schema({
    MarksRowID: {
        type:String,
        required:true
    },
    MarksID:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Amount:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('MarksRow',MarksRowSchema);