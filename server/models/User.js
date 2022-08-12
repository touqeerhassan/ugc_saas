const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    default: "brand",
  },
  funds: {
    currency: {
      type: String,
      default: "USD",
    },
    amount: {
      type: Number,
      default: 0,
    },
  },
});

const campaign = mongoose.model("user", campaignSchema);
module.exports = campaign;
