const mongoose = require('mongoose');
const MarksSchema = new mongoose.Schema({
    MarksID: {
        type:String,
        required:true
    },
    Titel:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Total:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('MarksSchema',MarksSchema);