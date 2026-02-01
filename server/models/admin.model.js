const { Schema, default: mongoose, model } = require("mongoose"); // you can also write imports like this in js
const objectId = mongoose.Types.ObjectId;

const adminSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

const adminModel = model("admin", adminSchema);

module.exports = adminModel;
