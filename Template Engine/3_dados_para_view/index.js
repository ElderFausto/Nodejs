const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "elder",
    idade: 26,
  };

  const color = {
    cor: 'branca',
    cabelo: 'curto'
  }

  res.render("home", { user: user, color });
});

app.listen(3000, () => {
  console.log("app funcionando");
});
