const mongoose = require('mongoose');
const User = require('../models/user-model');



module.exports.check_auth = (req, res, next) => {
    if (req.session.userId) {

        res.status(201).json({
            message: "User already logged in. Redirect to Homepage."
        });

    } else {

        next();

    }
};

module.exports.check_user_exists = (req, res, next) => {
 

    User.find({ email: req.body.email })
        .exec()
        .then(user => {

            if (user.length >= 1) {

                res.status(401).json({
                    message: 'User Exsits!'
                });
                console.log(req.body.email + ' Exists!');


            } else {
                let email = req.body.email;
                console.log(email + ' does not Exist!');
                next();


            }

        })
        .catch(err => {
            console.log(err);
        });
};
