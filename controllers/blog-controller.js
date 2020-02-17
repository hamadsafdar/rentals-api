// Require the dependencies


const Blog = require('../models/blog-model');
const User = require('../models/user-model');
const mongoose = require('mongoose');



module.exports.create_blog = (req, res, next) => {

    const blog = new Blog({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        autor: req.session.userId

    });

    User.findById({ _id: req.session.userId }).orFail();



}

module.exports.get_blog = (req, res, next) => {

}

module.exports.delete_blog = (req, res, next) => {

}

module.exports.update_blog = (req, res, next) => {

}
