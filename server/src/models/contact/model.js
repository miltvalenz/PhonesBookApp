// models/user/model.js
const mongoose = require('mongoose');
const schema = require('./schema');

/**
 * Export new mongoose model Contact.
 */
const Contact = mongoose.model('Contact', schema);
module.exports = Contact;
