
const House = require('../models/house-model');
const Address = require('../models/address-model');
const Post = require('../models/post-model');
const mongoose = require('mongoose');




module.exports.create_post = (req, res, next) => {

    const newPost = new Post({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        imagesUrl: req.body.imagesUrl
    });


    const newHouse = new House({
        _id: mongoose.Types.ObjectId(),
        type: req.body.type,
        floor: req.body.floor,
        washroom: req.body.washroom,
        bedroom: req.body.bedroom,
        size: req.body.size,
        garage: req.bod.garage
    });
    const newAddress = new Address({
        _id: mongoose.Types.ObjectId(),
        houseNumber: req.body.houseNumber,
        building: req.body.building,
        area: req.body.area,
        city: req.body.city,
        zipcode: req.body.zipcode,
        lat: req.body.lat,
        long: req.body.long
    });
    // House
    newHouse.address = newAddress._id;
    newHouse.post = newPost._id;
    newHouse.save().then().catch();

    // Address
    newAddress.house = newHouse._id;
    newAddress.save().then().catch();

    //Post

};

module.exports.acquire_post = (req, res, next) => {

};

module.exports.delete_post = (req, res, next) => {

};

module.exports.edit_post = (req, res, next) => {

};
