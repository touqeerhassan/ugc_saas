const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const withdrawSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

const withdraw = mongoose.model("withdraw", withdrawSchema);
module.exports = withdraw;
