const { Schema, model } = require('mongoose');

const postSchema = new Schema({
	description: { type: String, required: true },
	imagesUrl: [{ type: String, required: true }],

	// ref to other models
	review: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
	place: {
		type: Schema.Types.ObjectId,
		ref: 'place'
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'Users'
	},

	createdOn: { type: Date, default: Date.now },
	modifiedOn: { type: Date, default: Date.now }
});

module.exports = model('Post', postSchema);
