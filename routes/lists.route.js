const router = require("express").Router();
const verify = require("../verifyToken");
const listsController = require("../controllers/listsController");

//CREATE
router.post("/", verify, listsController.create);

//DELETE
router.delete("/:id", verify, listsController.delete);

//GET
router.get("/", verify, listsController.get);

module.exports = router;
