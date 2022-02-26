const router = require("express").Router();
const verify = require("../verifyToken");
const subscribtionsController = require("../controllers/subscribtionsController");

//CREATE
router.post("/",  verify, subscribtionsController.create);

//UPDATE
router.put("/:id", verify, subscribtionsController.update);

//DELETE
router.delete("/:id", verify, subscribtionsController.delete);

//GET
router.get("/find/:id", verify, subscribtionsController.get);

//GET ALL
router.get("/", verify, subscribtionsController.getAll);

module.exports = router;
