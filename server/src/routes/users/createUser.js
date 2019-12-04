const express = require('express');
const router = express.Router();
const { check, body, validationResult } = require('express-validator');

/**
 *
 */
module.exports = ({ User }) => {
	router.post(
		'/register',
		[
			check('name')
				.isLength({ min: 2 })
				.withMessage('Must be 2 characteres minimun'),
			check('email')
				.isEmail()
				.normalizeEmail()
				.withMessage('Must be a valid email'),
			check('email').custom(async value => {
				const emailSearch = await User.findOne({ email: value });
				if (emailSearch) {
					throw new Error('Email already in use');
				}
			}),
			check('password')
				.isLength({ min: 8 })
				.withMessage('Must be 8 characters minimun'),
			check('passwordConfirmation').custom((value, { req }) => {
				if (value !== req.body.password) {
					throw new Error(
						'Password confirmation does not match password'
					);
				}
				return true;
			})
		],
		async (req, res, next) => {
			try {
				const errors = validationResult(req);
				
				if (!errors.isEmpty()) {
					return res.status(422).json({ errors: errors.array() });
				}

				const {
					name,
					email,
					password,
					passwordConfirmation
				} = req.body;

				const newUser = new User({
					name,
					email,
					password
				});

				newUser.password = await newUser.encryptPassword(password);

				console.log(newUser);
				await newUser.save();

				res.status(200).json({ User: newUser });
			} catch {
				next(error);
			}
		}
	);

	return router;
};
