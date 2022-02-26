const router = require("express").Router();
const verify = require("../verifyToken");
const seriesController = require("../controllers/seriesController");

//CREATE
router.post("/", verify, seriesController.create);

//UPDATE
router.put("/:id", verify, seriesController.update);

//DELETE
router.delete("/:id", verify, seriesController.delete);

//GET
router.get("/find/:id", verify, seriesController.get);

//GET RANDOM
router.get("/random", verify, seriesController.getRandom);

//GET ALL
router.get("/", verify, seriesController.getAll);

module.exports = router;
