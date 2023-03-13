const express = require("express");
const path = require("path");
const User = require("./models/Users");
const sequelize = require("./utils/database");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname , "public")))
app.set("view engine" , "ejs");
app.set("views" , "views")

app.get("/", (req, res) => {
  res.render("dashboard" , {path : "/"})
});

const port = process.env.PORT || 5000;

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
