const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new mongoose.Schema({
  //type - ONE_TO_ONE, GROUP
  messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
  participantIds: [{ type: String }],
  type: { type: String, required: true },
  unreadCount: { type: Number },
});

const thread = mongoose.model("thread", threadSchema);
module.exports = thread;
