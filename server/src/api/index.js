const express = require('express');

/**
 * Middlewares
 */
const { errorHandler } = require('../middleware');

/**
 * Requires all routes here.
 */
const { getUsers, createUser } = require('../routes/users');
const { createContact } = require('../routes/contacts');

/**
 * Requires all models here.
 */
const User = require('../models/user');
const Contact = require('../models/contact');

/**
 * Combine all models to one object.
 */
const models = { User, Contact };

/**
 *
 */
const routersInit = () => {
	const router = express.Router();

	router.use('/users', getUsers(models));
	router.use('/users', createUser(models));
	router.use('/contacts', createContact(models));

	// Catch endpoints errors.
	router.use(errorHandler);

	return router;
};

module.exports = routersInit;
