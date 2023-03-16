const express = require("express");
const path = require("path");
const Customer = require("./models/Customer");
const Domains = require("./models/Domains");
const HostingProvider = require("./models/HostingProvider")
const Services = require("./models/Services")
const Hostings = require("./models/Hostings")
const sequelize = require("./utils/database");
const bodyParser = require("body-parser");
const Quotation = require("./models/Quotation")
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

const store = new SequelizeStore({
  db: sequelize,
})

// Global Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret : "hsdgsjdghfsjdfhgsjdfhgsjfhgsjfh",
  store : store,
  resave : false,
  saveUninitialized : true,
}))


// Static & EJS Stuff
app.use(express.static(path.join(__dirname , "public")))
app.set("view engine" , "ejs");
app.set("views" , "views")


// Routes
app.use("/admin" , require("./routes/admin.routes"))
app.use(require("./routes/auth.routes"));
app.use("/customer" , require("./routes/customer.routes"))

const port = process.env.PORT || 3000;


// Relations
Customer.hasMany(Domains);
Domains.belongsTo(Customer);
Customer.hasMany(Hostings);
Hostings.belongsTo(Customer);
Customer.hasMany(Quotation);
Quotation.belongsTo(Customer);

// Sequelize Sync
sequelize
  .sync()
  .then((result) => {
    console.log("💻 DB Connected");
    app.listen(port, () => {
      console.log("====================================");
      console.log(`Server running on port ${port} 🔥`);
      console.log("====================================");
    });
  })
  .catch((error) => {
    console.log("Error syncing table:", error);
  });
