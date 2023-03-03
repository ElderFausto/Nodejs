const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basepath = path.join(__dirname, "templates");

const users = require('./users')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//arquivos estaticos
app.use(express.static("public"))

app.use('/users', users)

app.get("/", (req, res) => {
  res.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
