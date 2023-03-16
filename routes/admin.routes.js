const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const Services = require("../models/Services");
const isLogin = require("../middleware/auth.middleware")
router.get("/", adminController.getDashboard);


// Customer Routes
router.get("/customers", isLogin , adminController.getCustomer);

router.get("/add-customer"   , isLogin, adminController.getAddCustomer )

router.post("/add-customer"  , isLogin, adminController.AddCustomer)

router.get("/edit-customer/:id"  , isLogin, adminController.getEditCustomer)

router.post("/edit-customer"  , isLogin, adminController.editCustomer)

router.get("/cust_details/:id"  , isLogin, adminController.getCustDetails)

router.get("/remove-customer/:id"   , isLogin, adminController.removeCust)

router.post("/add-service"   , isLogin, adminController.addService)

// Domain Routes

router.get("/domains"  , isLogin, adminController.getDomain);

router.get("/add-domain"  , isLogin, adminController.getAddDomain )

router.get("/add-hosting"  , isLogin, adminController.getAddHosting )

router.post("/add-domain" , isLogin, adminController.AddDomain);

router.post("/add-hosting" , isLogin, adminController.AddHosting);

// Hosting Provider Routes

router.get("/host-providers", adminController.getHostProviders);

// Services 

router.get("/services" , isLogin, adminController.getServices);

router.post("/add-services" , isLogin, adminController.addServices);


module.exports = router;