const { Schema, model } = require('mongoose');

const guestShcema = new Schema({});

module.exports = model('Guest', guestShcema);
