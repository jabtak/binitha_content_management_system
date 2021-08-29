
const mongoose = require('mongoose');

var User = mongoose.model('User', {
    username: {type: String},
    firstName: { type: String },
    lastName: { type: String },
    contact: { type: String },
    gender: { type: String },
    email:{ type: String},
    password:{ type: String}
    
},'Users');

module.exports = { User };