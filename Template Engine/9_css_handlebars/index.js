const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "aprender node.js",
    category: "javascript",
    body: "este artigo vai te ajudar a aprender nodejs",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "aprender a cozinhar",
      category: "cozinhar",
      body: "figado acebolado",
      comments: 10,
    },
    {
      title: "aprender a costurar",
      category: "costurar",
      body: "fazer vestido",
      comments: 30,
    },
    {
      title: "aprender mecanica",
      category: "macanica",
      body: "criar um motor",
      comments: 80,
    },
  ];

  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  const user = {
    name: "elder",
    idade: 26,
  };

  const color = {
    cor: "branca",
    cabelo: "curto",
  };

  const auth = false;
  const approved = false;

  res.render("home", { user: user, color, auth, approved });
});

app.listen(3000, () => {
  console.log("app funcionando");
});
