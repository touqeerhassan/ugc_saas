const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  // 1 : Complete
  // 2 : Submitted
  // 3 : Pending
  // 4 : Rejected / Cancelled

  campaign: { type: Schema.Types.ObjectId, ref: "campaign", required: true },
  price: { type: Number, required: true },
  status: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  demoImage: { type: String },
  demoVideo: { type: String },
  demoExtraImage: { type: String },
  demoExtraVideo: { type: String },
  branduser: { type: String, required: true },
  creatoruser: { type: String, required: true },
  review: { type: String },
});

const order = mongoose.model("order", orderSchema);
module.exports = order;
