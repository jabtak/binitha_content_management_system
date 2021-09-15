
const mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title: {type: String},
    main: { type: String },
    details: { type: String },
    image: { type: String },
    category: { type: String },
    createdBy: { type: String },
    createdDate: { type: Date }
  
},'Blog');

module.exports = { Post };