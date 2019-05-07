var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      //load in donation object to render in handlebars
    });
  });

  // Load example page and pass in an example by id
  app.get("/donation", function(req, res) {
    //loading donations page
    res.render("donation", {
      //load in donation object to render in handlebars
    });
  });

  app.get("/donator", function(req, res) {
    //loading donations page
    res.render("donator", {
      //load in donation object to render in handlebars

      //login state for rendering register/sign in
      login: false
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
