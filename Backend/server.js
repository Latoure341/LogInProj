//Secrets Management
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute.js');

const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const dirname = path.resolve();

//CORS Configuration
const allowedOrigins = ['http://localhost:5173'];

const corsOptions = {
    origin: function (origin, callback){
        if (allowedOrigins.indexOf(origin) !== -1 || !origin){
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
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(dirname, '../frontend/dist')));
app.use(cors(corsOptions));        //Enables CORS for specified origins

//Routes
// Mount API routes under a clear API namespace
app.use('/api/users', userRoute);

// Serve frontend index
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(dirname, '../frontend/dist/index.html'));
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
        console.log('The database is connected!');
        app.listen(port, ()=>{
            console.log("Server is running on port " + port);
        });
  })
  .catch((error) => {
        console.error('Database connection failed:', error);
        process.exit(1);
  });
  
  