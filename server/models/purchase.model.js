const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const purchaseSchema = schema({});

const purchaseModel = mongoose.Model("purchase", purchaseSchema);
