const mongoose = require("mongoose");   // you can imports like this or see admin model for another way
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = schema({});

const userModel = mongoose.Model("user", userSchema);
