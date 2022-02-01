const router = require("express").Router();
const verify = require("../verifyToken");
const usersController = require("../controllers/usersController")

//UPDATE
router.put("/:id", 
// verify, 
usersController.update);

//DELETE
router.delete("/:id", 
// verify, 
usersController.delete);

//GET
router.get("/find/:id", usersController.get);

//GET WICHLIST
router.get("/wichlist/:id", usersController.getWichlist);

//GET ALL
router.get("/", 
// verify, 
usersController.getAll);

//GET USER STATS
router.get("/stats", usersController.getStats);

module.exports = router;
