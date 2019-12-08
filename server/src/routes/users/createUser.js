const express = require('express');
const router = express.Router();

/**
 * POST
 * New User register.
 */
module.exports = ({ User }, validation, schemas) => {
	router.post(
		'/register',
		validation(schemas.user, 'body'),
		async (req, res, next) => {
			try {
				const errors = validationResult(req);

				if (!errors.isEmpty()) {
					return res.status(422).json({ errors: errors.array() });
				}

				const {
					name,
					email,
					password,
					passwordConfirmation
				} = req.body;

				const newUser = new User({
					name,
					email,
					password
				});

				newUser.password = await newUser.encryptPassword(password);

				console.log(newUser);
				await newUser.save();

				res.status(200).json({ User: newUser });
			} catch {
				res.status(400).send({
					error:
						'req body should take the form { username, password }'
				});
			}
		}
	);

	return router;
};
