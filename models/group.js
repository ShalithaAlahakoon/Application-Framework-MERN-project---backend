const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
    GroupID: {
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Supervisor:{
        type:String,
        required:true
    },
    CoSupervisor:{
        type:String,
        required:true
    },
    PannelMemeber1:{
        type:String,
        required:true
    },
    PannelMemeber2:{
        type:String,
        required:true
    },
    PannelMemeber3:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Group',GroupSchema);