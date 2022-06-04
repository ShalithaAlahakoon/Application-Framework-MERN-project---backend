const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;


app.use(bodyParser.json());


// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ################## Routes start ####################//

//student routes
app.use('/api/student', require('./routes/studentRoutes'));
//student group routes
app.use('/api/group', require('./routes/studentGroupRoutes'));
//user routes
app.use('/api/user', require('./routes/userRoutes'));
//research topic routes
app.use('/api/researchTopic', require('./routes/researchTopicRoutes'));
//document routes
app.use('/api/document', require('./controllers/documentController'));
//supervisor routes
app.use('/api/supervisor', require('./routes/supervisorRoutes'));
//document Evaluate routes
app.use('/api/documentMark', require('./routes/documentMarkRoutes'));


// ################## Routes end ####################//

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Export app
module.exports = app;

// End of file