const { Schema, model } = require('mongoose');

const hostSchema = new Schema({
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
	cnic: { type: String, required: true, unique: true },
	imageUrl: { type: String, default: '' }
});

module.exports = model('Host', hostSchema);
