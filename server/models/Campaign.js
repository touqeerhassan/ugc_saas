const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  campaignName: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  shipping: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  content: {
    contentType: {
      type: Number,
    },
    imageContent: {
      type: String,
    },
    videoContent: {
      type: String,
    },
    videoDuration: {
      type: String,
    },
    contentFormat: {
      type: String,
    },
    contentDescription: { type: String },
    creatorLevel: {
      type: String,
    },
    noOfCreators: {
      type: Number,
    },
  },
  gender: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
});

const campaign = mongoose.model("campaign", campaignSchema);
module.exports = campaign;
