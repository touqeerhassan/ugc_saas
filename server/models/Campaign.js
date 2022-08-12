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
      title: String,
      description: String,
      price: Number,
    },
    videoContent: {
      title: String,
      description: String,
      price: Number,
    },
    videoDuration: {
      banner: String,
      time: Number,
      price: Number,
      icon: Number,
    },
    contentFormat: {
      title: String,
      height: String,
      width: String,
      ratio: String,
    },
    contentDescription: { title: String, price: String },
    creatorLevel: {
      title: String,
      price: Number,
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
