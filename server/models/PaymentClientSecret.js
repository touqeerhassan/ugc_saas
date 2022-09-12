const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentClientSecretSchema = new mongoose.Schema({
  // 1 : Complete
  // 2 : Submitted
  // 3 : Pending
  // 4 : Rejected / Cancelled
  clientSecret: {
    type: String,
    required: true,
    unique: true,
  },
});

const paymentClientSecret = mongoose.model(
  "paymentClientSecret",
  paymentClientSecretSchema
);
module.exports = paymentClientSecret;
