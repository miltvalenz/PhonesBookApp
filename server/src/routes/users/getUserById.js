const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/* GET user. */
module.exports = ({ User }, passport) => {
	router.get(
		'/details/:id',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			
			try {
				//const user = await User.findById(req.params.id);
				const { user } = req;
				res.status(200).json({ User: user });
			} catch{
				next(error);
			}
		}
	);

	return router;
};
