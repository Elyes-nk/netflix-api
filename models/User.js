const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
    subscribtion: { type: Schema.Types.ObjectId, ref: 'Subscribtion' },
    subscribtionDate: { type: Date },
    subscribtionMounths: { type:Number, default:0 },
    wichlist: [{ type: Schema.Types.ObjectId, ref: 'Movie'}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
