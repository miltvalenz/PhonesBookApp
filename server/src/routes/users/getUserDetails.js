const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/* GET user. */
module.exports = ({ User }, passport) => {
	router.get(
		'/details',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			try {
				const id = req.user.id;
				const user = await User.findById(id);
				res.status(200).json({ User: user });
			} catch {
				next(error);
			}
		}
	);

	return router;
};
