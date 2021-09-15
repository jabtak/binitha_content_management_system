
const mongoose = require('mongoose');

var Comment = mongoose.model('Blog', {
    comment: { type: String },
    createdBy: { type: String },
    createdById: { type: String },
    createdDate: { type: Date },
    blogID: {type: String}
},'Comments');

module.exports = { Comment };