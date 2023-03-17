const express = require("express");
const router = express.Router();
const custController = require("../controllers/customer");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/" ,  authMiddleware.isLogin , custController.getDashboard );

router.get("/myQuotations" , authMiddleware.isLogin , custController.getMyQuotations);

router.get("/add-quotation" , authMiddleware.isLogin , custController.getAddQuotation)

router.post("/add-quotation" , authMiddleware.isLogin , custController.addQuotation)

module.exports = router;