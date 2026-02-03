const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

// this model does'nt require validator because the backend is sending data here directly otherthen user sending the data.

const purchaseSchema = new schema(
  {
    userId: { type: objectId, ref: "user", required: true }, // here "user" is the reference from user model
    courseId: { type: objectId, ref: "course", required: true }, // "course" is the reference from course model
    courseTitle: { type: objectId, ref: "course", required: true },
    purchasedOn: { type: Date, default: Date.now, required: true },
  },
  {
    timestamps: true,
  },
);

/* Schema only defines the shape of data
👉 You still must provide the actual value when saving */

const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = purchaseModel;
