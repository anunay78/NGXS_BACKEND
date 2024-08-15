const express = require('express');
const mongoose = require('mongoose');
const  cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config');
const app = express();
const employeeRoute  = require('./api/router/employee');

app.use(bodyParser.json());
app.use(cors());

app.use('/employees',employeeRoute)



app.listen(3000,()=>{
    console.log('server served on localhost:3000');
});