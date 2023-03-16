const bcrypt = require("bcrypt");
const session = require("express-session");
const Customer = require("../models/Customer");

exports.getLogin = (req, res) => {
  res.render("auth/login");
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const cust = await Customer.findOne({ where: { email: email } });

  const depass = await bcrypt.compare(password, cust.password);

  if (cust) {
    if (cust.roleId == 1) {
      if (depass) {
        req.session.cust = cust.id + cust.cust_uni_id;
        return res.redirect("/admin/");
      }
    }
    if (cust.roleId == 2) {
      if (depass) {
        req.session.cust = cust.id+cust.cust_uni_id ;
        return res.redirect("/customer/");
      }
    }
  }

  res.redirect("/");
};

exports.getLogout = (req , res)=>{
    req.session.destroy((error)=>{
       return res.redirect("/customer")
       
    })
}