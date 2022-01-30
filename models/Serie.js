const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SerieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    movies: [
        { type: Schema.Types.ObjectId, ref: 'Movie' }
    ],
    year: { type: String },
    limit: { type: Number },
    genre: [
      { type: Schema.Types.ObjectId, ref: 'Genre' }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Serie", SerieSchema);
