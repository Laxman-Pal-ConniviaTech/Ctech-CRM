const express = require("express");
const router = express.Router();
const custController = require("../controllers/customer");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/" ,  authMiddleware.isLogin , custController.getDashboard );


// Quotataion
router.get("/myQuotations" , authMiddleware.isLogin , custController.getMyQuotations);

router.get("/add-quotation" , authMiddleware.isLogin , custController.getAddQuotation)

router.post("/add-quotation" , authMiddleware.isLogin , custController.addQuotation)

router.get("/downlaod_quotation/:id" , authMiddleware.isLogin , custController.downloadQuotation)

router.get("/remove-quotation/:id" , authMiddleware.isLogin , custController.removeQuotation)

// Invoice
router.get("/myInvoice",  authMiddleware.isLogin , custController.getMyInvoice );

router.get("/add-invoice" , authMiddleware.isLogin , custController.getAddInvoice)

router.post("/add-invoice" , authMiddleware.isLogin , custController.AddInvoice)


module.exports = router;