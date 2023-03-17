const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers")
const authMiddleware = require("../middleware/auth.middleware");

router.get("/" , authMiddleware.isLogedIn , authController.getLogin )

router.post("/login" , authController.login)

router.get("/logout", authController.getLogout);


module.exports = router;