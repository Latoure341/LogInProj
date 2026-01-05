const express = require('express');
const mongoose = require('mongoose');
//const ProductRoute = require('./routes/productRoute.js');
const userRoute = require('./routes/userRoute.js');

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/data/users', userRoute);
//app.use('/data/products', ProductRoute);

app.get('/', (req, res)=>{
    res.status(200).send('../frontend/index.html');
})

mongoose.connect('mongodb+srv://tukamothupi_db_user:05IZ6Q8ZE7hJbFcT@thedeveloper.bkgwozo.mongodb.net/BackendDB?retryWrites=true&w=majority')
  .then(() => {
        console.log('The database is connected!');
        app.listen(port, ()=>{
            console.log("Server is running on port " + port);
        });
  });
  
  