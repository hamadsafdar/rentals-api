const User = require('../models/user-model');
const Post = require('../models/post-model');
const mongoose = require('mongoose');

module.exports.find_user = (req, res, next) => {
    if (req.body.name) {

        User.find({ name: req.body.name })
            .select('-password -_id -__v')
            .orFail(() => {

                res.status(401).json({
                    message: 'No User found!'
                });
                return;

            })
            .exec()
            .then(users => {
                res.status(200).json({
                    users: users
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error!'
                });
            });

    } else if (req.body.email) {

        User.find({ email: req.body.email })
            .select('-password -_id -__v')
            .orFail(() => {

                res.status(401).json({
                    message: 'No User found!'
                });
                return;

            })
            .exec()
            .then(users => {
                res.status(200).json({
                    user: users[0]
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error!'
                });
                console.log(err);
            });

    } else if (req.body.interests) {

        User.find({ interests: req.body.interests })
            .select('-password -_id -__v')
            .orFail(() => {

                res.status(401).json({
                    message: 'No User found!'
                });
                return;

            })
            .exec()
            .then(users => {
                res.status(200).json({
                    users: users
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error!'
                });
                console.log(err);
            });

    } else if (req.body.institute) {

        User.find({ institute: req.body.institute })
            .select('-password -_id -__v')
            .orFail(() => {

                res.status(401).json({
                    message: 'No User found!'
                });
                return;

            })
            .exec()
            .then(users => {
                res.status(200).json({
                    users: users
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error!'
                });
                console.log(err);
            });

    } else if (req.body.city) {

        User.find({ city: req.body.city })
            .select('-password -_id -__v')
            .orFail((err) => {

                return res.status(401).json({
                    message: 'No User found!'
                });
                

            })
            .exec()
            .then(users => {
                res.status(200).json({
                    users: users
                });
                return;
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error!'
                });
                console.log(err);
                return;
            });

    } else if (req.body.profession) {

        User.find({ profession: req.body.profession })
            .select('-password -_id -__v')
            .orFail(() => {

                res.status(401).json({
                    message: 'No User found!'
                });
                return;

            })
            .exec()
            .then(users => {
                res.status(200).json({
                    users: users
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error!'
                });
                console.log(err);
            });
    } 
};


module.exports.find_post = (req, res, next) => {

};