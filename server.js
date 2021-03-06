const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};
var bcrypt = require("bcryptjs");


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();
// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   initial(),
//   createUsersPadrao(),
//   vinculaRoleUsersPadrao()
//  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem Vindo a API Poupando." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/usuario.routes")(app);
require("./app/routes/user_role.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "Usuário"
  });
 
  Role.create({
    id: 2,
    name: "Moderador"
  });
 
  Role.create({
    id: 3,
    name: "Administrador"
  });
}

function createUsersPadrao(){
  
var user =[
  {
  nome: "Administrador",
  sobrenome: "Sistema",
  email: "adm_poupando@gmail.com",
  usuario: "admin",
  senha: bcrypt.hashSync("admin@123", 8),
  status: "A"
 },
 {
 nome: "Demonstração",
 sobrenome: "Sistema",
 email: "demo_poupando@gmail.com",
 usuario: "demo",
 senha: bcrypt.hashSync("demo@123", 8),
 status: "A"
 }
];

  for (let i = 0; i < user.length; i++) {
    db.usuario.create(user[i])
    .then(data => {
      ""
    })
    .catch(err => {
      console.log(err) 
    });
    
  }
}

function vinculaRoleUsersPadrao(){
  
  var vinculaRoleUsersPadrao =[
    {
      usuarioId: "1",
      roleId: "3",
   },
   {
      usuarioId: "2",
      roleId: "3",
   }
  ];
  
    for (let i = 0; i < vinculaRoleUsersPadrao.length; i++) {
      db.user_role.create(vinculaRoleUsersPadrao[i])
      .then(data => {
        console.log(data) 
      })
      .catch(err => {
        console.log(err) 
      });
      
    }
  }