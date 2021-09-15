const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Comment } = require('../models/comment');

// => localhost:3000/employees/



router.get('/:id', (req, res) => {
    var id = req.params.id ;
    console.log(id);
    Comment.find({ "blogID": id })
    .then(function (comments) {
      res.send(comments);
    });
});

 
  

router.post('/', (req, res) => {
    var comment = new Comment({
        comment: req.body.comment,
        createdBy: req.body.createdBy,
        createdById: req.body.createdById,
        createdDate: req.body.createdDate,
        blogID: req.body.blogID
    });
    comment.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;