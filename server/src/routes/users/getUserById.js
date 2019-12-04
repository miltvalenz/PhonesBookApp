const express = require('express');
const router = express.Router();

/* GET user. */
module.exports = ({ User }) => {
	router.get('/details/:id', async (req, res, next) => {
		try {
			const user = await User.findById(req.params.id);
			res.status(200).json({ User: user });
		} catch {
			next(error);
		}
	});

	return router;
};
