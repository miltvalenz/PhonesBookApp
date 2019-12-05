const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
  },
  number1: {
    type: Number,
  },
  number2: {
    type: Number,
  },
	user: {
		type: ObjectId,
		required: [true]
	}
});

module.exports = schema;
