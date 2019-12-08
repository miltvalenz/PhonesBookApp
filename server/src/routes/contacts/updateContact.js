const express = require('express');
const router = express.Router();

/**
 * PUT
 * Edit details of User Contact.
 */
module.exports = ({ Contact }, passport, validation, schemas) => {
	router.put(
		'/edit/:id',
		passport.authenticate('jwt', { session: false }),
		validation(schemas.contact, 'body'),
		async (req, res, next) => {
			try {
				const { name, email, number1, number2 } = req.body;
				const contactFind = await Contact.findById(req.params.id);

				if (!contactFind) {
					res.status(400).json({ message: 'Contact not found' });
					return;
				}

				const contact = {
					name,
					email,
					number1,
					number2,
					user: contactFind.user
				};

				await Contact.findByIdAndUpdate(req.params.id, contact);

				res.status(200).json({ Contact: 'Contact updated!' });
			} catch {
				next(error);
			}
		}
	);

	return router;
};
