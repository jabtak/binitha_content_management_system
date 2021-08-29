
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var alumniController = require('./controllers/AlumniController');
var userController = require('./controllers/UserController');

var app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/user', userController);
app.use('/employees', employeeController);
app.use('/signup', alumniController);