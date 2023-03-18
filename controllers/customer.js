const Quotation = require("../models/Quotation");
const fs = require("fs");
const Invoice = require("../models/Invoice");
const getPDF = require("../utils/getPDF")

exports.getDashboard = (req, res) => {
  res.render("customer/dashboard", { path: "customer/dashboard" });
};

exports.getMyQuotations = async (req, res) => {
  const quotations = await Quotation.findAll({
    where: { customerId: req.session.custId },
  });
  res.render("customer/quotation", {
    path: "customer/myQuotations",
    quotations,
  });
};

exports.getAddQuotation = (req, res) => {
  res.render("customer/add-quotation", { path: "customer/add-quotation" });
};

exports.addQuotation = async (req, res) => {
  // res.send(req.body)
  try {
    const createdQuotation = await req.cust.createQuotation({
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
      quotation_color:req.body.quotation_color
    });

    if (createdQuotation) {
      res.redirect("/customer/myQuotations");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.downloadQuotation = async (req, res) => {
  try {
    const id = req.params.id;
    const quotation_details = await Quotation.findByPk(id);
    if (id) {
      const template = fs.readFileSync("views/pdf/quotation.ejs", "utf-8");
      const tatalCost =
        Number(quotation_details.packing_charges) +
        Number(quotation_details.loading_charges) +
        Number(quotation_details.unloading_charges) +
        Number(quotation_details.unpacking_charges);
      const data = {
        packing_charges: quotation_details.packing_charges,
        loading_charges: quotation_details.loading_charges,
        unloading_charges: quotation_details.unloading_charges,
        unpacking_charges: quotation_details.unpacking_charges,
        tableHeadColor: quotation_details.quotation_color,
        client_name: quotation_details.client_name,
        createdAt: quotation_details.createdAt,
        client_mobile: quotation_details.client_mobile,
        shift_from: quotation_details.shift_from,
        shift_to: quotation_details.shift_to,
        shifting_date: quotation_details.shifting_date,
        token_amt: quotation_details.token_amt,
        totalCost: tatalCost,
      };
      await getPDF.generatePDF(res, template, data , id);
      return;
    }

    res.redirect("/customer/myQuotations");
  } catch (error) {
    console.log(error);
  }
};

exports.removeQuotation = async (req, res) => {
try {
  const id = req.params.id;

  const quotationDestroyed = await Quotation.destroy({where:{id : id}})

  res.redirect("/customer/myQuotations");
} catch (error) {
  console.log(error);
}

};

// Invoice

exports.getMyInvoice = async (req , res )=>{
  const invoices = await Invoice.findAll({
    where: { customerId: req.session.custId },
  });
  res.render("customer/invoice", {
    path: "customer/myInvoice",
    invoices : invoices,
  });
}


exports.getAddInvoice = async (req, res) => {

  res.render("customer/add-invoice", { path: "customer/add-invoice" });

}

exports.AddInvoice = async (req, res) => {
  // res.send(req.body)
  try {
    const createdInvoice = await req.cust.createInvoice({
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
      shifting_date: req.body.shifting_date,
      token_amt: req.body.token_amt,
      service_charge: req.body.service_charge,
      service_charge_type: req.body.service_charge_type,
      cgst_per: req.body.cgst_per,
      cgst_num: req.body.cgst_num,
      sgst_per: req.body.sgst_per,
      sgst_num: req.body.sgst_num,
      invoice_color: req.body.invoice_color
    });

    if (createdInvoice) {
      res.redirect("/customer/myInvoice");
    }
  } catch (error) {
    console.log(error);
  }
};