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

router.put('/:id', (req, res) => {
    var findid= req.params.id;
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

User.findByIdAndUpdate(findid, 
    {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact,
        gender: req.body.gender,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    , (err, doc) => {
    if (!err) { res.send(doc); }
    else { 
        console.log('Error in Update :' + JSON.stringify(err, undefined, 2)); }
 });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
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