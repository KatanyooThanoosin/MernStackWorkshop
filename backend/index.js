const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.get("*",(req, res) => {
    res.json({
        data: "Hello World"
    })
})

const port = process.env.PORT || 5500;
app.listen(port,()=>{
    console.log(`server start at ${port}`)
})