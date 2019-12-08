const express = require('express');
const router = express.Router();

/**
 * Post
 * Create new Contact to authenticated user.
 */
module.exports = ({ Contact }, passport) => {
	router.post(
		'/create',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			try {
				const { name, email, number1, number2 } = req.body;
				const id = req.user.id;

				const newContact = new Contact({
					name,
					email,
					number1,
					number2,
					user: id
				});

				await newContact.save();

				res.status(200).json({ Contact: newContact });
			} catch {
				next(error);
			}
		}
	);

	return router;
};
