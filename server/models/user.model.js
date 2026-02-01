const mongoose = require("mongoose"); // you can imports like this or see admin model for another way
const schema = mongoose.Schema;

const userSchema = new schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: String,
});

const userModel = mongoose.model("user", userSchema); // here , this "user" will become the reference for the user model

module.exports = userModel;
