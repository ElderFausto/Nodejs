const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const basepath = path.join(__dirname, "templates");

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/users/add", (req, res) => {
  res.sendFile(`${basepath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name
  const age = req.body.age

  console.log(`o nome do usuario é: ${name} e tem ${age} anos`);

  res.sendFile(`${basepath}/userform.html`)
});

// rest params
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  //leitura da tabela users, resgatar um usuario
  console.log(`buscando pelo usuario ${id}`);

  res.sendFile(`${basepath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
