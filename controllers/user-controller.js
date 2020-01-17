
const User = require('../models/user-model');
const mongoose = require('mongoose');


module.exports.user_sign_up = (req, res, next) => {

    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status().json({
                    message: "User already exists! Redirect to Signup page."
                });
            } else {
                const user = new User({
                    _id: mongoose.Types.ObjectId(),
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    phoneNumber: req.body.phoneNumber,
                    city: req.body.city,
                    gender: req.body.gender,
                    dob: req.body.dob,
                    profession: req.body.profession,
                    institute: req.body.institute,
                    interest: req.body.interest
                });

                user
                    .save()

                    .then(createdUser => {
                        res.status(201).json({
                            message: `New User Created! Redirect to user profile.`,
                            createdUser: createdUser
                        });
                    })

                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            message: `User not creaed! Redirect to Signup page.`
                        });
                    });
            }
        });


};

module.exports.user_sign_in = (req, res, next) => {

    if (req.session) {

        res.status().json({

        });


    } else {
        User.findOne({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length = 1) {
                    if (user.password === req.body.password) {
                        res.status(200).json({
                            message: `User Authenticated! Redirect to user user profile.`
                        });
                        //adding session entry for user
                        req.session.user = user;

                    } else {

                        //Password doesn't match

                        res.status(401).json({
                            message: `User Authentication Failed! Redirect to Login page.`
                        });
                        console.log(`Password not matched!`);
                    }
                } else {

                    res.status(401).json({
                        message: `User Authentication failed! Redirect to Login page.`
                    });
                    console.log(`User Not Found!`);
                }
            });
    }



};

module.exports.user_update = (req, res, next) => {
    let filter = req.body.email;
    let updateOps =
        User.findOneAndUpdate({});
};