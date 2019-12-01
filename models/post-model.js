
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const postSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdOn: {type: Date, required: true, default: Date.now()},
    modifiedOn: {type: Date, default: Date.now()},

    // ref
    address: {type: Schema.Types.ObjectId, ref: 'Address', required: true},
    house: {type: Schema.Types.ObjectId, ref: 'House', required: true},
    creator: {type: Schema.Types.ObjectId, ref: 'Users', required: true},


});



module.exports = mongoose.model('Post', postSchema);