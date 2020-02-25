// Model for discussion forum

const mongoose = require('mongoose');


const topicShcema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    //Ref
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Topic', topicShcema);