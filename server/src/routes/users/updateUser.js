const express = require('express');
const router = express.Router();

/**
 * PUT
 * Edit user details.
 */
module.exports = ({ User }, passport) => {
	router.put(
		'/edit',
		passport.authenticate('jwt', { session: false }),
		async (req, res, next) => {
			try {
				const userId = req.user.id;
				const { name, email, password } = req.body;
				const userFind = await User.findById(userId);

				if (!userFind) {
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
		}
	);

	return router;
};
