const express = require('express');
const router = express.Router();

/**
 * GET
 * Contact details of User Authenticated.
 */
module.exports = ({ Contact }, passport) => {
	router.get(
		'/details/:id',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			try {
				const id = req.params.id;
				const contact = await Contact.findById(id);
				res.status(200).json({ Contact: contact });
			} catch {
				next(error);
			}
		}
	);

	return router;
};
