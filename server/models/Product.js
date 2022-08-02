const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  cover: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  handlingTime: {
    type: String,
    required: true,
  },
  shippingTime: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const product = mongoose.model("product", productSchema);
module.exports = product;
