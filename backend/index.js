const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const blogRoute = require('./route/blog');

const app = express();

//database
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: false,
})
.then(() => {
    console.log('connect database succesfully');
})
.catch((err) => {
    console.log('Error connecting database: ' + err.message)
});

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api",blogRoute);

const port = process.env.PORT || 5500;
app.listen(port,()=>{
    console.log(`server start at ${port}`)
})