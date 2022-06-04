const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicFeedback = new Schema({
    groupId:{
        type: String,
        required: true
    },

    mark:{
        type: String,
        required: true
    },

    comment:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('TopicFeedback', TopicFeedback);