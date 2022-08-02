const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", "./templates/views/");

app.listen(port, () => {
  console.log(`Express application started at port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/user", (req, res) => {
  res.render("user.ejs");
});
