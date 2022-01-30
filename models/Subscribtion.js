const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscribtionSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    quality: { type: String, required: true },
    resolution: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscribtion", SubscribtionSchema);
