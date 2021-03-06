    const controller = require("../controllers/role.controller.js");
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
    
    router.get("/", controller.findAll);

    // router.post("/", controller.create);
    
    // router.get("/:id", controller.getRoleByID);
  
    
    // router.put("/login", controller.validaUsuarioSenha);
  
    
    // router.get("/:id", controller.findOne);
  
    
    // router.put("/:id", controller.update);
  
    
    // router.delete("/:id", controller.delete);
  
    
    // router.delete("/", controller.deleteAll);
  
    app.use("/api/role", router);
    
    };
