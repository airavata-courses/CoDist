
const mongoose = require("mongoose");

/**
 * @type {Model}
 */
const userSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String, default: "" },
	password: { type: String,trim: true },
	email: {type: String,trim: true, unique:true },
	emailVerification: { type: Boolean, default: false },
	verificationCode: { type: String, default: '' }
},{timestamps : true});

module.exports = mongoose.model( "users" , userSchema );

