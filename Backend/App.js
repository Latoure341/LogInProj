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
//CORS Configuration
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

//Middleware
app.use(express.json());
app.use(cookiesParser());          //Parse cookies from incoming requests

//Routes
// Mount API routes under a clear API namespace
app.use('/api/users', userRoute);

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

