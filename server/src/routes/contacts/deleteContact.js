const express = require('express');
const router = express.Router();

/**
 * DELETE
 * Delete contact of Authenticated User.
 *
 */

module.exports = ({ Contact }, passport) => {
	router.delete(
		'/delete/:id',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			try {
				await Contact.findByIdAndDelete(req.params.id);
				res.status(200).json({
					success: 'Contact Deleled Successfully!'
				});
			} catch {
				next(error);
			}
		}
	);

	return router;
};
