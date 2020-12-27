const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//  });

 var user = {
  nome: "Lucas ",
  sobrenome: "Henrique Elias",
  email: "lucas.he.elias@gmail.com",
  usuario: "admin",
  senha: "lucas"
};

db.usuario.create(user, function(e) {
  if (e) {
      throw e;
  }
});



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem Vindo a API Poupando." });
});

require("./app/routes/usuario.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}