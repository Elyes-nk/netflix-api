const router = require("express").Router();
const verify = require("../verifyToken");
const moviesController = require("../controllers/moviesController");

//CREATE
router.post("/", verify, moviesController.create);

//UPDATE
router.put("/:id", verify, moviesController.update);

//DELETE
router.delete("/:id", verify,moviesController.delete);

//GET
router.get("/find/:id", verify, moviesController.get);

//GET RANDOM
router.get("/random", verify, moviesController.getRandom);

//GET ALL
router.get("/", verify, moviesController.getAll);

module.exports = router;
