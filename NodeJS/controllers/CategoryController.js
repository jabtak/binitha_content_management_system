const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Category } = require('../models/catogery');

// => localhost:3000/employees/


router.post('/', (req, res) => {
    var cat = new Category({
        name: req.body.name,
        description: req.body.description,
     
    });
    cat.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Category Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    var findid= req.params.id;
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

Category.findByIdAndUpdate(findid, 
    {
        name: req.body.name,
        description: req.body.description,

    }
    , (err, doc) => {
    if (!err) { res.send(doc); }
    else { 
        console.log('Error in category Update :' + JSON.stringify(err, undefined, 2)); }
 });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Category.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/', (req, res) => {
    Category.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Categories :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;