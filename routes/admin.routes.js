const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers")

router.get("/", adminController.getDashboard);


// Customer Routes
router.get("/customers", adminController.getCustomer);

router.get("/add-customer" , adminController.getAddCustomer )

router.post("/add-customer", adminController.AddCustomer)

// Domain Routes

router.get("/domains", adminController.getDomain);

router.get("/add-domain" , adminController.getAddDomain )

router.post("/add-domain", adminController.AddDomain);

// Hosting Provider Routes

router.get("/host-providers", adminController.getHostProviders);

module.exports = router;