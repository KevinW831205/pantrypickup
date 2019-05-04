var db = require("../models");

module.exports = function(app) {
  // Get all donations
  app.get("/api/donations/", function(req, res) {
    db.Food.findAll({}).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Get route for retrieving a single donator
  app.get("/api/donations/:id", function(req, res) {
    db.Food.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbFood) {
        res.json(dbFood);
      });
  });

  // POST route for saving a new donator
  app.post("/api/donations", function(req, res) {
    console.log(req.body);
    db.Food.create({
      donator: req.body.donator,
      food: req.body.food,
      size: req.body.size,
      expiration: req.body.expiration,
      donated: req.body.donated
    })
      .then(function(dbFood) {
        res.json(dbFood);
      });
  });

  // DELETE route for deleting donators
  app.delete("/api/donations/:id", function(req, res) {
    db.Food.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbFood) {
        res.json(dbFood);
      });
  });

  // PUT route for updating posts
  app.put("/api/donations", function(req, res) {
    db.Food.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbFood) {
        res.json(dbFood);
      });
  });
};