const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentMark = new Schema({
    groupId:{
        type: String,
        required: true
    },

    mark:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('DocumentMark', DocumentMark);