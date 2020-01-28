
const House = require('../models/house-model');
const Address = require('../models/address-model');
const Post = require('../models/post-model');
const mongoose = require('mongoose');




module.exports.create_post = (req, res, next) => {

    const newPost = new Post({
        _id: mongoose.Types.ObjectId(),
        
    });

    const newHouse = new House();

    const newAddress = new Address();



};

module.exports.acquire_post = (req, res, next) => {

};

module.exports.delete_post = (req, res, next) => {

};

module.exports.edit_post = (req, res, next) => {

};
