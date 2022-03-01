const router = require("express").Router();
const authController = require("../controllers/authController");
const verify = require("../verifyToken");

//REGISTER
router.post("/register", authController.register );

//LOGIN
router.post("/login", authController.login );

//VERIFY TOKEN
router.get("/verify", verify, authController.verify );



module.exports = router;
