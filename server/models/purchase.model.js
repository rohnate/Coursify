const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const purchaseSchema = new schema(
  {
    userId: { type: objectId, ref: "user", required: true }, // here "user" is the reference from user model
    courseId: { type: objectId, ref: "course", required: true }, // "course" is the reference from course model
    courseTitle: { type: objectId, ref: "course", required: true },
    purchasedOn: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

/* Schema only defines the shape of data
👉 You still must provide the actual value when saving */

const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = purchaseModel;
