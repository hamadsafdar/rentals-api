// Message Schema

const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    messageContent: { type: String, required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    //TODO: Add Message automatic Expiry
});

module.exports = mongoose.model('Message', messageSchema);