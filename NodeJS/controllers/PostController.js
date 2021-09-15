const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Post } = require('../models/post');

// => localhost:3000/employees/


router.post('/', (req, res) => {
    var pos = new Post({
        title: req.body.title,
        main: req.body.main,
        details: req.body.details,
        image: req.body.image,
        category: req.body.category,
        createdBy: req.body.createdBy,
        createdDate: req.body.createdDate
     
    });
    pos.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/', (req, res) => {
    Post.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Posts :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Post.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Blog :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    var findid= req.params.id;
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);  
    
    Post.findByIdAndUpdate(findid, 
        {
            title: req.body.title,
            main: req.body.main,
            details: req.body.details,
            image: req.body.image,
            category: req.body.category,
            createdBy: req.body.createdBy,
            createdDate: req.body.createdDate
        }
        , (err, doc) => {
        if (!err) { res.send(doc); }
        else { 
            console.log('Error in blog Update :' + JSON.stringify(err, undefined, 2)); }
     });
    });
    
    router.delete('/:id', (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.params.id}`);
    
        Post.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Blog Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });
     

module.exports = router;