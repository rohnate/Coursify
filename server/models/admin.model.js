const { Schema, default: mongoose, Model } = require("mongoose"); // you can also write imports like this in js
const objectId = mongoose.Types.ObjectId;

const adminSchema = Schema({});

const adminModel = Model("admin", adminSchema);
