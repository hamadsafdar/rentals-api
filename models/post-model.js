
const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdOn: { type: Date, required: true, default: Date.now },
    modifiedOn: { type: Date, default: Date.now },
    imagesUrl: [{ type: String, required: true }],

    // ref
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    house: { type: mongoose.Schema.Types.ObjectId, ref: 'House', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },


});



module.exports = mongoose.model('Post', postSchema);