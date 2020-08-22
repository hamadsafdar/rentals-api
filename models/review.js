const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({});

module.exports = model('Review', reviewSchema);
