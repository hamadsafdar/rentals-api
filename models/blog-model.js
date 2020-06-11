const mongoose = require('mongoose');


const blogShcema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, default: 'under preocessing' },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: Date, default: Date.now },

    //ref
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }


});

module.exports = mongoose.model('Blog', blogShcema);