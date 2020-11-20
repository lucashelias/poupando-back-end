module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Usuario
    router.post("/", usuario.create);
  
    // Retrieve all usuario
    router.get("/", usuario.findAll);
  
    // Retrieve all published usuario
    router.get("/published", usuario.findAllPublished);
  
    // Retrieve a single Usuario with id
    router.get("/:id", usuario.findOne);
  
    // Update a Usuario with id
    router.put("/:id", usuario.update);
  
    // Delete a Usuario with id
    router.delete("/:id", usuario.delete);
  
    // Create a new Usuario
    router.delete("/", usuario.deleteAll);
  
    app.use('/api/usuario', router);
  };