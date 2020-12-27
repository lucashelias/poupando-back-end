    const controller = require("../controllers/usuario.controller.js");
    const { authJwt } = require("../middleware");
  
    module.exports = function(app) {
      app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    
      app.get("/api/test/all", controller.allAccess);
    
      app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
      );
    
      app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
      );
    
      app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
      );
    

      
    var router = require("express").Router();

    // Create a new Usuario
    router.post("/", controller.create);
  
    // Retrieve all usuario
    router.get("/", controller.findAll);
  
    // Retrieve all published usuario
    router.put("/login", controller.validaUsuarioSenha);
  
    // Retrieve a single Usuario with id
    router.get("/:id", controller.findOne);
  
    // Update a Usuario with id
    router.put("/:id", controller.update);
  
    // Delete a Usuario with id
    router.delete("/:id", controller.delete);
  
    // Create a new Usuario
    router.delete("/", controller.deleteAll);
  
    app.use("/api/usuario", router);
    
    };
