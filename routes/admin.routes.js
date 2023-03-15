const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const Services = require("../models/Services");

router.get("/", adminController.getDashboard);


// Customer Routes
router.get("/customers", adminController.getCustomer);

router.get("/add-customer" , adminController.getAddCustomer )

router.post("/add-customer", adminController.AddCustomer)

router.get("/edit-customer/:id", adminController.getEditCustomer)

router.post("/edit-customer", adminController.editCustomer)

router.get("/cust_details/:id", adminController.getCustDetails)

router.get("/remove-customer/:id" , adminController.removeCust)

router.post("/add-service" , adminController.addService)

// Domain Routes

router.get("/domains", adminController.getDomain);

router.get("/add-domain" , adminController.getAddDomain )

router.get("/add-hosting" , adminController.getAddHosting )

router.post("/add-domain", adminController.AddDomain);

router.post("/add-hosting", adminController.AddHosting);

// Hosting Provider Routes

router.get("/host-providers", adminController.getHostProviders);

// Services 

router.get("/services", adminController.getServices);

router.post("/add-services", adminController.addServices);


module.exports = router;