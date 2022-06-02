const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({

    group_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    },
    file_name: {
        type: String,
        required: true
    },
    file_type: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Document',DocumentSchema);
