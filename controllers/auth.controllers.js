const bcrypt = require("bcrypt");
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
        req.session.role = 'admin';
        req.session.custId = cust.id;
        return res.redirect("/admin/");
      }
    }
    if (cust.roleId == 2) {
      if (depass) {
        req.session.custId = cust.id;
        return res.redirect("/customer/");
      }
    }
  }

  res.redirect("/");
};

exports.getLogout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return console.log(error);
    }
    return res.redirect("/");
  });
};
