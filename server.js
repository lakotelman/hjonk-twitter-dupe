const express = require("express");
const dotenv = require("dotenv");
const initializeRoutes = require("./src/routes")
const app = express();

dotenv.config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/graphql/schema");
const { connectDB } = require("./src/db");

app.set("view engine", "ejs");
app.set("views", "./src/templates/views/");


app.use(express.static("./src/static/"))

initializeRoutes(app)

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


