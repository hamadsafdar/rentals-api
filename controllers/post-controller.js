
const House = require('../models/house-model');
const Address = require('../models/address-model');
const Post = require('../models/post-model');
const User = require('../models/user-model');
const mongoose = require('mongoose');




module.exports.create_post = (req, res, next) => {

    let newPost = new Post({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        imagesUrl: req.body.imagesUrl
    });


    let newHouse = new House({
        _id: mongoose.Types.ObjectId(),
        type: req.body.type,
        floor: req.body.floor,
        washroom: req.body.washroom,
        bedroom: req.body.bedroom,
        size: req.body.size,
        garage: req.bod.garage
    });
    let newAddress = new Address({
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
    newPost.house = newHouse._id;
    newPost.address = newAddress._id;
    newPost.createdBy = req.session.userId;
    newPost.save().then().catch();

    // Saving post id to the user

    User.findById({ _id: req.session.userId })
        .exec()
        .orFail()
        .then(user => {
            user.posts.push(newPost._id);
            user.save().catch();
            res.status().json({
                message: `Post created`,
                post: newPost
            });

        })
        .catch();



    // TODO: Send Response to the client regarding creating post 

};


/* 

    TODO:
    Acquire all posts
    Acquire a specific post



*/

module.exports.acquire_all_posts = (req, res, next) => {

    Post.find({})
        .exec()
        .then(posts => {
            //TODO: Send rquested number of posts
            posts.forEach(post => {

            })

        })
        .catch();

}


module.exports.acquire_post = (req, res, next) => {
    Post.findById({ _id: req.params.id })
        .populate('address')        //add selection query
        .populate('house')          //add selection query
        //orFail executes when required post is not found.
        .orFail(() => {
            res.status(404).message({
                message: `Required post not found.`
            });
        })
        .then(post => {
            res.status(200).json({
                message: `Heres the requested post`,
                post: post
            });
        })
        .catch(err => {
            res.status(500).message({
                message: `something went wrong while finding the post!`
            });
            console.log(err.message + " 123");

        });

};

module.exports.delete_post = async (req, res, next) => {

    let post = await Post.findById({ _id: req.body.id }).exec();
    let house = await House.findById({ _id: post.house }).exec();
    let address = await Address.findById({ _id: house.address }).exec();

    post.remove();
    house.remove();
    address.remove();
    // TODO: Send Response to the client regarding deleting post 

};

module.exports.edit_post = (req, res, next) => {
    // TODO: Edit the post
};

module.exports.get_renting_posts = (req, res, next) => {

    Post.find({ postType: 'RENTING' })
        .exec()
        .orFail()
        .then(posts => {
            posts.forEach(post => {

            });
        })
        .catch();

};

module.exports.get_sharing_posts = (req, res, next) => {
    Post.find({ postType: 'SHARING' })
        .exec()
        .orFail()
        .then(posts => {
            posts.forEach(post => {

            });
        })
        .catch();

};