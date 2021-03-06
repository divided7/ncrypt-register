require("./models/db");
const schoolController = require("./controllers/schoolController");
const app = require("express")();
const express = require("express");
const path = require("path");
const exphb = require("express-handlebars");
const bodyparser = require("body-parser");

const port = process.env.PORT  || 3000;
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/src/"));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

app.engine(
  "hbs",
  exphb({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/src/layouts",
  })
);

app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use("/", schoolController);
