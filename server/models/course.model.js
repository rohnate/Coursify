const { Schema, default: mongoose, model } = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const courseSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: { type: objectId, ref: "admin", required: true },
});

const courseModel = model("course", courseSchema);

module.exports = courseModel;
