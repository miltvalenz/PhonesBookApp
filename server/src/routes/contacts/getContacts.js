const express = require('express');
const router = express.Router();

/**
 * GET
 * Contact details of User Authenticated.
 */
module.exports = ({ Contact }, passport) => {
	router.get(
		'/',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			try {
                const userId = req.user.id;
				const contacts = await Contact.find({}).where('user').equals(userId).sort('name');
				res.status(200).json({ Contact: contacts });
			} catch {
				next(error);
			}
		}
	);

	return router;
};
