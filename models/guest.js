// This file provides the Model of User Schema

const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	password: { type: String, required: true, lowercase: true },
	phoneNumber: { type: String, required: true, unique: true },
	imageUrl: { type: String, default: '' },

	//ref to other collection
	blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
});

module.exports = mongoose.model('Guest', guestSchema);
