const router = require("express").Router();
const verify = require("../verifyToken");
const genresController = require("../controllers/genresController");

//CREATE
router.post("/",
//  verify,
  genresController.create);

//UPDATE
router.put("/:id",
//  verify,
  genresController.update);

//DELETE
router.delete("/:id",
//  verify,
 genresController.delete);

//GET ALL
router.get("/",
//  verify,
  genresController.getAll);

module.exports = router;
