// This file provides the Model of User Schema

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	// Required Attributes
	_id: mongoose.Schema.Types.ObjectId,
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
	city: { type: String, required: true },
	gender: { type: String, default: null },
	dob: { type: Date },

	// optional attributes

	profession: { type: String, default: null },
	interests: [{ type: String, default: null }],
	institue: { type: String, default: null },
	imageUrl: { type: String, default: '' },

	//ref to other collection
	blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
});

module.exports = mongoose.model('User', userSchema);
