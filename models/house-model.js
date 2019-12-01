
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const houseSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {type: String, required: true, default: 'house'},
    floor: {type: Number, required: true},
    washroom: {type: Number, required: true},
    bedroom: {type: Number, required: true},
    size: {type: String, required: true},
    garage: {type: Boolean, required: true},
    //ref
    address: {type: mongoose.Schema.Types.ObjectId, ref: 'Adress'},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});


module.exports = mongoose.model('House', houseSchema);