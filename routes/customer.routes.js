const express = require("express");
const router = express.Router();
const custController = require("../controllers/customer")

router.get("/", custController.getDashboard );


module.exports = router;