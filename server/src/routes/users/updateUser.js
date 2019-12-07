const express = require('express');
const router = express.Router();

/**
 *
 */
module.exports = ({ User }) => {
	router.put('/edit/:id', async (req, res, next) => {
		try {
			const { name, email, password } = req.body;
			const userFind = await User.findById(req.params.id);

			if(!userFind){
				res.status(400).json({ message: 'User not found' });
				return;
			}

			const user = {
				name,
				email,
				password
			};

			await User.findByIdAndUpdate(req.params.id, user);

			res.status(200).json({ User: 'User updated!' });
		} catch {
			next(error);
		}
	});

	return router;
};
