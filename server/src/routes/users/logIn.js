const express = require('express');
const router = express.Router();

/*  */
module.exports = (passport) => {
	router.post(
		'/login',
		passport.authenticate('local'),
		async (req, res, next) => {
			try {
				res.status(200).json({ Users: "You're Welcome!" });
			} catch {
				next(error);
			}
		}
	);

	return router;
};