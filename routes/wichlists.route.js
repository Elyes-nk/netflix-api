const router = require("express").Router();
const verify = require("../verifyToken");
const wichlistsController = require("../controllers/wichlistsController");

//CREATE
router.post("/", wichlistsController.create);

//UPDATE
router.put("/:id", wichlistsController.update);

//DELETE
router.delete("/:id", wichlistsController.delete);

//GET
router.get("/find/:id", wichlistsController.get);


module.exports = router;
