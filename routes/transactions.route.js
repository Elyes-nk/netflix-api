const router = require("express").Router();
const verify = require("../verifyToken");
const transactionsController = require("../controllers/transactionsController");


//GET ALL
router.get("/",
//  verify,
transactionsController.getAll);

module.exports = router;
