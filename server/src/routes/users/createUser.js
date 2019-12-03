const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

/* GET users listing. */
module.exports = ({ User }) => {
	router.post(
		'/register',
		[
			check('name').isLength({ min: 3 }),
			check(
				'email',
				'The password must be 5+ chars long and contain a number'
			).isEmail(),
			check('password').isLength({ min: 8 }),
			check('passwordConfirmation').isLength({ min: 8 }),
			check('email').custom(value => {
				return User.findByEmail(value).then(user => {
					if (user) {
						return Promise.reject('E-mail already in use');
					}
				});
			}),
			check('password').custom((value, { req }) => {
				if (value !== req.body.passwordConfirmation) {
					throw new Error('Password confirmation is incorrect');
				}
			})
		],
		async (req, res, next) => {
			try {
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
