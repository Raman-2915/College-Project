const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.redirect("/Home");
});
app.get("/Home", (req, res) => {
  res.render("index.ejs");
});
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
