const Customer = require("../models/Customer");
const Domains = require("../models/Domains");
const HostingProvider = require("../models/HostingProvider");

exports.getDashboard = async (req, res) => {
  const totalDomains = await Domains.count()
  const totalCust = await Customer.count()
  res.render("dashboard", { path: "/" , totalDomains : totalDomains  , totalCust : totalCust});
};

exports.getCustomer = (req, res) => {
  Customer.findAll().then(customers=>{
    res.render("customer", { path: "/admin.customers" , customers : customers });
  })
};

exports.getAddCustomer = (req, res) => {
  res.render("add-customer", { path: "/add-customer" });
};

exports.AddCustomer = (req, res) => {
  Customer.create({
    name: req.body.cust_name,
    email: req.body.cust_email,
    mobile: req.body.cust_phone,
    comp_name: req.body.comp_name,
    address: req.body.address,
    city: req.body.city,
    pincode: req.body.pincode,
    password: req.body.password,
  }).then(user=>{
    res.redirect('/admin/customers');
    console.log(user);
  }).catch(error=>{
    console.log(error);
  })
};


// Domains Controllers 

exports.getDomain = async  (req, res) => {

  const domains = await Domains.findAll({
    include: [{
      model: Customer // will create a left join
    }]
  })

  // res.send(domains)
  res.render("domains", { path: "/admin/domains" , domains : domains });
}

exports.getAddDomain = async (req, res) => {

try {
  
  const customers = await Customer.findAll({where :{ban : 0}})

  const providers = await HostingProvider.findAll() 

  res.render("add-domain", { path: "/admin/add-domain" , customers : customers , providers : providers});

} catch (error) {
  console.log(error);
}

}

exports.AddDomain = (req, res) => {

  Domains.create({
    customerId : req.body.cust_name,
    status : req.body.status,
    domain_name : req.body.domain_name,
    booked_from : req.body.book_from ,
    doamin_mailId : req.body.login_id,
    domain_password : req.body.password,
    domain_pin : req.body.pin ,
    registration_Date : req.body.reg_date,
    expire_date : req.body.exp_date,
    remark : req.body.remark,
    domain_amount : req.body.renew_amt ,
    hosting_provider : req.body.hosting_provider
  }).then(domain=>{
      res.redirect('/admin/domains');
      console.log(domain);
    }).catch(error=>{
      console.log(error);
    })
};


// Hosting Provider Controllers

exports.getHostProviders = async (req, res) => {

  const providers = await HostingProvider.findAll() 

  res.render("hosting_providers", { path: "/admin/hosting_providers"  , providers : providers});
};