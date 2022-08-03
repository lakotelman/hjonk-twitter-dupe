const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/graphql/schema");
const { connectDB } = require("./src/db");

app.set("view engine", "ejs");
app.set("views", "./templates/views/");

connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Express application started at port ${process.env.PORT}`);
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
