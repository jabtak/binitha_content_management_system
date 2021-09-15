const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');

// => localhost:3000/employees/


router.post('/login', (req, res) => {
    User.find({ "username": req.body.username,"password": req.body.password })
    .then(function (user) {
      res.send(user);
    });
  
});

router.post('/', (req, res) => {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    user.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;