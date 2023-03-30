const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas
app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if(!name) {
    res.status(422).json({message: 'O campo de nome é obrigatorio'})
    return
  }

  console.log(name);
  console.log(price);

  res.status(200).json({ message: `O produto ${name} foi adicionado` });
});

app.get("/", (req, res) => {
  res.json({
    message: "Minha primeira rota",
  });
});

app.listen(3000);
