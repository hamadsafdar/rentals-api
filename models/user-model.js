// This file provides the Model of User Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    // Required Attributes
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true, lowercase:true },
    phoneNumber: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    gender: { type: Boolean, required: true },
    dob: { type: Date, required: true },
    
    
    // optional attributes

    profession: { type: String, default: null },
    intrest: [{ type: String, default: null }],
    institue: { type: String, default: null },
    profileImageUrl: { type: String},

    //ref to other collections
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]


});

module.exports = mongoose.model('User', userSchema);