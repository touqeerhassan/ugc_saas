const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema({
  attachments: [String],
  body: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  authorId: {
    type: String,
    required: true,
  },
});

const message = mongoose.model("message", messageSchema);
module.exports = message;
