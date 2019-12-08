const Joi = require('joi');

/**
 * Schemas for validate data.
 * User model.
 * Contact model.
 */
const schemas = {
	user: Joi.object().keys({
		name: Joi.string()
			.min(3)
			.max(30)
			.required(),
		email: Joi.string().required(),
		password: Joi.string()
			.min(8)
			.required()
	}),
	contact: Joi.object().keys({
		name: Joi.string()
			.min(3)
			.max(30)
			.required(),
		email: Joi.string()
			.email(),
		number1: Joi.number()
			.min(3)
			.positive()
			.required(),
		number2: Joi.number()
			.min(3)
			.positive(),
		user: Joi.string().alphanum()
	})
};
module.exports = schemas;
