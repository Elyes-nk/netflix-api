const Wichlist = require("../models/Wichlist");

exports.create = async (req, res) => {
      const newWichlist = new Wichlist(req.body);
      try {
        const savedWichlist = await newWichlist.save();
        res.status(201).json(savedWichlist);
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.update = async (req, res) => {
      try {
        const updatedWichlist = await Wichlist.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedWichlist);
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.delete = async (req, res) => {
      try {
        await Wichlist.findByIdAndDelete(req.params.id);
        res.status(200).json("The wichlist has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}

exports.get = async (req, res) => {
    try {
      const wichlist = await Wichlist.findById(req.params.id);
      res.status(200).json(wichlist);
    } catch (err) {
      res.status(500).json(err);
    }
}
