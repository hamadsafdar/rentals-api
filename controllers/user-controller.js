const User = require('../models/user-model');
const mongoose = require('mongoose');

module.exports.user_sign_up = (req, res, next) => {
	console.log(req.body);
	User.find({ email: req.body.email })
		.exec()
		.then((user) => {
			if (user.length >= 1) {
				return res.status(400).json({
					message: 'EMAIL_ALREADY_REGISTERED'
				});
			} else {
				const user = new User({
					_id: mongoose.Types.ObjectId(),
					name: req.body.name,
					email: req.body.email,
					password: req.body.pass,
					phoneNumber: req.body.phoneNumber,
					city: req.body.city,
					gender: req.body.gender,
					dob: req.body.dob,
					profession: req.body.profession,
					institute: req.body.institute,
					interests: req.body.interests
				});

				user.save()

					.then((createdUser) => {
						res.status(201).json({
							createdUser: createdUser
						});
					})

					.catch((err) => {
						console.log(err);
						res.status(500).json({
							message: `User not creaed! Redirect to Signup page.`
						});
					});
			}
		});
};

module.exports.user_sign_in = (req, res, next) => {
	if (!req.session.userId) {
		User.findOne({ email: req.body.email })
			.select('-password -__v')
			.exec()
			.then((user) => {
				if (user) {
					if (user.password === req.body.pass) {
						req.session.userId = user._id;
						return res.status(200).json({
							isAuthenticated: true,
							user: user
						});
					} else {
					
						return res.status(401).json({
							isAuthenticated: false,
							message: 'INVALID_CREDS'
						});
					}
				} else {
					
					return res.status(401).json({
						isAuthenticated: false,
						message: 'INVALID_CREDS'
					});
				}
			});
	} else {
		res.status(200).json({
			isAuthenticated: true,
			message: 'ALREADY_LOGGEDIN'
		});
	}
};

module.exports.user_sign_out = (req, res, next) => {
	req.session.destroy((err) => {
		if (err) {
			res.status(500).json({
				message: `User logout failed! Display Fail message.`
			});
		} else {
			res.status(201).json({
				message: `User logged out! Redirect to login page.`
			});
		}
	});
};

module.exports.user_update = (req, res, next) => {
	let filter = req.body.email;
	let updateOps = {};
	User.findOneAndUpdate(updateOps);
};
