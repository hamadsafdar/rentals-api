
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },

    //ref
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Comment', commentSchema);