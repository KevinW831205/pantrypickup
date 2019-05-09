var db = require("../models");

module.exports = function (app) {
  // Get all donations
  app.get("/api/user", function (req, res) {
    db.User.findAll({
      attributes: ["user_name"]
    }).then(function (dbUser) {
      res.json(dbUser)
    });
  });

  app.put("/api/user/login", function (req, res) {
    console.log(req.body)
    db.User.findAll({
      where: {
        user_name: req.body.username,
        password: req.body.password
      }
    }).then(function (dbUser) {
      res.json(dbUser)
    });
  });


  // Get route for retrieving a single donator
  app.get("/api/donations/:id", function (req, res) {
    db.Food.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });



  // DELETE route for deleting donators
  app.delete("/api/donations/:id", function (req, res) {
    db.Food.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });

  // PUT route for updating posts
  app.put("/api/donations", function (req, res) {
    db.Food.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });




  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (result) {
      res.json(result);
    });
  })
};


