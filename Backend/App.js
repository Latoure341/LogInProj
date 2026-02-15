//Secrets Management
const dotenv = require('dotenv');
dotenv.config();
//
//const session = require('express-session');
//const passport = require('passport');
//const pass = require('./config/pass.js');

//Import libraries and frameworks
//const expressAuth = require('@auth/express')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const cookiesParser = require('cookie-parser');

//routes
const userRoute = require('./routes/userRoute.js');
//const authRoute = require('./routes/auth.route.js')

const app = express();

const path = require('path');
const { default: GitHub } = require('@auth/express/providers/github');
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
<<<<<<< Updated upstream
//app.use('/api/auth', authRoute);
//app.use('./api/auth', expressAuth.ExpressAuth({providers : [GitHub]}))
//app.use(
//  session({
//    secret: process.env.SESSION_SECRET,
//    resave: false,
//    saveUninitialized: false,
//  })
//);
//app.use(passport.initialize());
//app.use(passport.session());
=======
// app.use('./api/users', expressAuth.ExpressAuth({providers : [GitHub]}))
>>>>>>> Stashed changes

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

