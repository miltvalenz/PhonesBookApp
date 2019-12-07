const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

/*  */
module.exports = passport => {
	router.post('/login', (req, res) => {
		passport.authenticate('local', { session: false }, (error, user) => {
			if (error || !user) {
				return res.status(400).json({
					message: 'Something is not right',
					user: user
				});
			}

			/** This is what ends up in our JWT */
			const payload = {
				email: user.email,
				expires: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS)
			};

			console.log(payload);

			/** assigns payload to req.user */
			req.login(payload, { session: false }, error => {
				if (error) {
					res.status(400).send({ error });
				}

				/** generate a signed json web token and return it in the response */
				const token = jwt.sign(
					JSON.stringify(payload),
					'marico el que lo lea'
				);

				/** assign our jwt to the cookie */
				// res.cookie('jwt', jwt, { httpOnly: true, secure: true });
				res.status(200).json({ User: user, Token: token });
			});
		})(req, res);
	});

	return router;
};
