//Entry point for the backend server
require('dotenv').config();

const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const app = require('./App.js');

// Validate MONGO_URI and attempt DB connection if provided.
mongoose.connect(mongoUri, {
})
    .then(() => {
        console.log("Connected to MongoDB");
        //Start server only after DB connection is successful
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process if DB connection fails
    });

// Keep the process alive on unexpected promise rejections or uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown:', err);
});

