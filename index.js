const express = require("express");
const path = require("path");
const Customer = require("./models/Customer");
const Domains = require("./models/Domains");
const HostingProvider = require("./models/HostingProvider")
const sequelize = require("./utils/database");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname , "public")))
app.set("view engine" , "ejs");
app.set("views" , "views")

app.use("/admin" , require("./routes/admin.routes"))

const port = process.env.PORT || 3000;

Customer.hasMany(Domains);
Domains.belongsTo(Customer);

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
