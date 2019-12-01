
const House = require('../models/house-model');
const Address = require('../models/address-model');
const Post = require('../models/post-model');
const mongoose = require('mongoose');


const newPost;
const newHouse;
const newAddress;

module.exports.create_post = (req, res, next) => {

    newPost = new Post({
        _id: mongoose.Types.ObjectId(),
        
    });

    newHouse = new House();

    newAddress = new Address();



};

module.exports.acquire_post = (req, res, next) => {

};

module.exports.delete_post = (req, res, next) => {

};

module.exports.edit_post = (req, res, next) => {

};
