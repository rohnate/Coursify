const { Schema, default: mongoose, Model } = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const courseSchema = Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: objectId,
});

const courseModel = Model("course", courseSchema);
