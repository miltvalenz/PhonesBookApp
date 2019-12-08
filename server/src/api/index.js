const express = require('express');

/**
 * Middlewares
 */
const { errorHandler, passport, helpers } = require('../middleware');

/**
 * Requires all routes here.
 */
const {
	getUsers,
	createUser,
	getUserDetails,
	deleteUser,
	updateUser,
	logIn,
	logOut
} = require('../routes/users');

const {
	createContact,
	updateContact,
	deleteContact,
	getContactDetails,
	getContacts
} = require('../routes/contacts');

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

	/** Users Routes*/
	router.use('/users', getUsers(models, passport));
	router.use('/users', createUser(models));
	router.use('/users', getUserDetails(models, passport));
	router.use('/users', deleteUser(models));
	router.use('/users', updateUser(models));
	router.use('/users', logIn(passport));
	router.use('/users', logOut());

	/** Contacts Routes */
	router.use('/contacts', createContact(models, passport));
	router.use('/contacts', updateContact(models, passport));
	router.use('/contacts', deleteContact(models, passport));
	router.use('/contacts', getContactDetails(models, passport));
	router.use('/contacts', getContacts(models, passport));

	/** Catch endpoints errors */
	router.use(errorHandler);

	return router;
};

module.exports = routersInit;
