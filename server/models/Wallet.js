const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletSchema = new mongoose.Schema({
  email: {
    type: String
  },
  funds: {
    currency: {
      type: String,
      default: "USD"
    },
    amount: {
      type: Number,
      default: 0
    },
    selectedCurrency: {
      type: String,
      default: "USD"
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const wallet = mongoose.model("wallet", walletSchema);
module.exports = wallet;
