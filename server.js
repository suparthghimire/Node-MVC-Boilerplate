require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(process.env.PORT, () => {
  console.log(`Server Started at PORT: ${process.env.PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", require("./routes/index"));

/*
************************
Use All Routes Before This
************************         
*/
app.get("*", (req, res) => {
  res.render("404");
});
