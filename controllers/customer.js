const Quotation = require("../models/Quotation");

exports.getDashboard = (req, res) => {
  res.render("customer/dashboard", { path: "customer/dashboard" });
};

exports.getMyQuotations =async (req, res) => {
  const quotation = await Quotation.findAll({where : {customerId : req.session.custId}})
  // res.render("customer/quotation", { path: "customer/myQuotations" });
  res.send(quotation)
  // res.render("customer/quotation", { path: "customer/myQuotations" });
};

exports.getAddQuotation = (req, res) => {
  res.render("customer/add-quotation", { path: "customer/add-quotation" });
};

exports.addQuotation = async (req, res) => {
  // res.send(req.body)
    try {
      const createdQuotation = await Quotation.create({
        customerId : req.session.custId ,
        client_name: req.body.client_name,
        client_mobile: req.body.client_mobile,
        shift_from: req.body.shift_from,
        shift_to: req.body.shift_to,
        transport_charge: req.body.transport_charge,
        transport_type: req.body.transport_type,
        packing_charges: req.body.packing_charges,
        unpacking_charges: req.body.unpacking_charges,
        loading_charges: req.body.loading_charges,
        unloading_charges: req.body.unloading_charges,
        car_charge: req.body.car_charge,
        warehouse_charges: req.body.warehouse_charges,
        st_charges: req.body.st_charges,
        mathadi_charges: req.body.mathadi_charges,
        insurance_per: req.body.insurance_per,
        Insurance_type: req.body.Insurance_type,
        gst_per: req.body.gst_per,
        gst_type: req.body.gst_type,
        gst_num: req.body.gst_num,
        shifting_date: req.body.shifting_date,
        token_amt: req.body.token_amt,
        service_charge: req.body.service_charge,
        service_charge_type: req.body.service_charge_type,
      });

      if(createdQuotation){
        res.redirect("/customer/myQuotations")
      }

    } catch (error) {
      console.log(error);
    }
};