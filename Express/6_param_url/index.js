const express = require("express")
const app = express()
const port = 3000

const path = require("path")

const basepath = path.join(__dirname, 'templates')

// rest params
app.get('/users/:id', (req, res) => {
  const id = req.params.id

  //leitura da tabela users, resgatar um usuario
  console.log(`buscando pelo usuario ${id}`);

  res.sendFile(`${basepath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
})