const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize2", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate();
//   console.log("conectamos com sucesso com o sequelize");
// } catch (err) {
//   console.log("nao foi possivel conectar", err);
// }

module.exports = sequelize;
