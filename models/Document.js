const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    file_path: {
        type: String,
        required: true
    },
    file_mimetype: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Document', DocumentSchema);
