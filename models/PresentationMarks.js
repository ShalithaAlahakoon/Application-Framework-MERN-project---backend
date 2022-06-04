const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresentationMarks = new Schema({
    groupId:{
        type: String,
        required: true
    },

    member1Id:{
        type: String,
        required: true
    },

    member1Slide:{
        type: String,
        required: true
    },

    member1Demo:{
        type: String,
        required: true
    },

    member1Total:{
        type: String,
        required: true
    },

    member2Id:{
        type: String,
        required: true
    },

    member2Slide:{
        type: String,
        required: true
    },

    member2Demo:{
        type: String,
        required: true
    },

    member2Total:{
        type: String,
        required: true
    },

    member3Id:{
        type: String,
        required: true
    },

    member3Slide:{
        type: String,
        required: true
    },

    member3Demo:{
        type: String,
        required: true
    },

    member3Total:{
        type: String,
        required: true
    },

    member4Id:{
        type: String,
        required: true
    },

    member4Slide:{
        type: String,
        required: true
    },

    member4Demo:{
        type: String,
        required: true
    },

    member4Total:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('PresentationMarks', PresentationMarks);