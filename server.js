const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

const StudentRoutes = require('./routes/students');
app.use(bodyParser.json());
app.use(StudentRoutes);

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

// Routes
// app.use('/api/v1/', require('./routes/api/v1/index'));

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Export app
module.exports = app;

// End of file