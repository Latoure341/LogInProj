//Secrets Management
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const cookiesParser = require('cookie-parser');

//routes
const userRoute = require('./routes/userRoute.js');

const app = express();


const path = require('path');
// Use __dirname so paths are correct regardless of current working directory
const dirname = __dirname;

//CORS Configuration
const allowedOrigins = ['http://localhost:5173'];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true       //Allow cookies/auth headers with requests
}

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(dirname, '../frontend/dist')));
app.use(cors(corsOptions));        //Enables CORS for specified origins
app.use(cookiesParser());          //Parse cookies from incoming requests

//Routes
// Mount API routes under a clear API namespace
app.use('/api/users', userRoute);

// Serve frontend index
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(dirname, '../frontend/dist/index.html'));
})

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

