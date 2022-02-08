const Transactions = require("../models/Transaction");


exports.getAll = async (req, res) => {
    // if (req.user.isAdmin) {
      try {
        const transactions = await Transactions.find().populate("User").populate("Subscribtion");
        res.status(200).json(transactions.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    // } else {
    //   res.status(403).json("You are not allowed!");
    // }
}