const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WichlistSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    movies: [
      { type: Schema.Types.ObjectId, ref: 'Movie' || 'Serie' }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wichlist", WichlistSchema);
