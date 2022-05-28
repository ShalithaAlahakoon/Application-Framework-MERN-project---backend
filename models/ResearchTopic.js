const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResearchTopic = new Schema({
    topic: {
        type: String,
        required: true
    },
    reaserchGroup: {
        type: String,
        required: true
    },
    researchArea: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ResearchTopic', ResearchTopic);