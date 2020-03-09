// Require the dependencies


const Blog = require('../models/blog-model');
const User = require('../models/user-model');
const mongoose = require('mongoose');



module.exports.create_blog = (req, res, next) => {

    var blog = new Blog({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        autor: req.session.userId

    });

    User.findById({ _id: req.session.userId })
        .orFail()
        .exec()
        .then(user => {

            user.blogs.push(blog._id);
            console.log(blog._id);
            user.save()
                .then(blog => {
                    return res.status(200).json({
                        message: 'Blog saved!!',
                        blog: blog
                    });
                })
                .catch(err => {
                    return res.status(500).json({
                        message: err.message
                    });
                });

        })
        .catch(err => {
            return res.status(500).json({
                message: err.message
            })
        });




}

module.exports.get_blog = (req, res, next) => {

    Blog.findById({ _id: req.params.blogId })
        .populate('author', '_id name profession')
        .orFail((err) => {
            return res.status(401).json({
                message: err.message
            });
        })
        .exec()
        .then(blog => {
            return res.status(200).json({
                blog: blog
            });
        })
        .catch(err => {
            return res.status(500).json({
                message: 'Internal Server!! Error while retreiving Blog.'
            });

        });



}

module.exports.delete_blog = (req, res, next) => {

}

module.exports.update_blog = (req, res, next) => {

}
