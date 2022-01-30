const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: [
      { type: Schema.Types.ObjectId, ref: 'Genre' }
    ],
    content: [
      { type: Schema.Types.ObjectId, ref: 'Movie' }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
