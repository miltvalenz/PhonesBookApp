const express = require('express');
const router = express.Router();

/**
 *
 */
module.exports = ({ Contact }) => {
	router.post('/create', async (req, res, next) => {
		try {
			const { name, email, number1, number2, user } = req.body;

			const newContact = new Contact({
				name,
				email,
				number1,
				number2,
				user
			});

			await newContact.save();

			res.status(200).json({ Contact: newContact });
		} catch {
			next(error);
		}
	});

	return router;
};
