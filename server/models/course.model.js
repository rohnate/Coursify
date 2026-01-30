const { Schema, default: mongoose, Model } = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const courseSchema = Schema({});

const courseModel = Model("course", courseSchema);
