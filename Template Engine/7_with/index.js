const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/dashboard', (req, res) => {
  const items = ['item a', 'item b', 'item c']

  res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  const post = {
    title: 'aprender node.js',
    category: 'javascript',
    body: 'este artigo vai te ajudar a aprender nodejs',
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get("/", (req, res) => {
  const user = {
    name: "elder",
    idade: 26,
  };

  const color = {
    cor: 'branca',
    cabelo: 'curto'
  }

  const auth = false
  const approved = false

  res.render("home", { user: user, color, auth, approved });
});

app.listen(3000, () => {
  console.log("app funcionando");
});
