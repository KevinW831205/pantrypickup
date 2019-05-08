var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    Food.selectAll(function(data) {
      var hdbrsObj = {
        donations: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
  });

  // Load donator page and pass in an donator by id
  app.get("/donator/:id", function(req, res) {
    db.Food.findOne({ where: { id: req.params.id } }).then(function(dbFood) {
      res.render("donator", {
        newDonator: dbFood
      });
    });
  });

  app.get("/donation", function(req, res) {
    Food.selectAll(function(data) {
      var hdbrsObj = {
        donations: data
      };
      console.log(hdbrsObj);
    //loading donations page
    res.render("donation", hdbrsObj
      //load in donation object to render in handlebars
    );
  });

  app.get("/donator", function(req, res) {
    Food.selectAll(function(data) {
      var hdbrsObj = {
        donations: data
      };
      console.log(hdbrsObj);
    //loading donations page
    res.render("donator", hdbrsObj
      //load in donation object to render in handlebars
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    res.render("404");
  });
  });
};
