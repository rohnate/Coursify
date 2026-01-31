const mongoose = require("mongoose"); // you can imports like this or see admin model for another way
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const userModel = mongoose.Model("user", userSchema);
