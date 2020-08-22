const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	type: { type: String, required: true }, // entire/portion/room
	washroom: { type: Number, required: true },
	bedroom: { type: Number, required: true },
	garage: { type: Boolean, required: true },
	facility: { type: String, required: true },
	//ref
	address: { type: mongoose.Schema.Types.ObjectId, ref: 'Adress' },
	post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

module.exports = mongoose.model('Place', placeSchema);
