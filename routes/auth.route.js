const router = require("express").Router();
const authController = require("../controllers/authController");
const verify = require("../verifyToken");

//REGISTER
router.post("/register", authController.register );

//LOGIN
router.post("/login", authController.login );

//VERIFY TOKEN
router.post("/login", verify, authController.verify );



module.exports = router;
