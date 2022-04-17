const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentGroupSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    student1: {
        type: String,
        required: true
    },
    student2: {
        type: String,
        required: true
    },
    student3: {
        type: String,
        required: true
    },
    student4: {
        type: String,
        required: true
    }

});

const StudentGroup = mongoose.model('StudentGroup', StudentGroupSchema);

module.exports = StudentGroup;
