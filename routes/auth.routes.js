const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth")

router.get("/" , auth.getLogin )

router.post("/login" , auth.login)

router.get("/logout", auth.getLogout);


module.exports = router;