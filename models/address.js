
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    houseNumber: {type: Number, required: true},
    building: String,
    area: {type: String, required: true},
    imageUrl: [{type: String}],
    city: {type: String, required: true},
    zipcode: {type: Number, required: true},
    lat: {type: mongoose.Types.Decimal128, required: true},
    long: {type: mongoose.Types.Decimal128, required: true},
    //ref
    house: {type: mongoose.Schema.Types.ObjectId, ref: 'House', required: true}


});

module.exports = mongoose.model('Address', addressSchema);