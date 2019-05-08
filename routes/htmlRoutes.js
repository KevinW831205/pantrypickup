var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Food.findAll({}).then(function (data) {
      var hdbrsObj = {
        donations: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
  });

  // Load donator page and pass in an donator by id
  app.get("/donator/:id", function (req, res) {
    db.Food.findOne({ where: { id: req.params.id } }).then(function (dbFood) {
      res.render("donator", {
        newDonator: dbFood
      });
    });
  });

  app.get("/donation", function (req, res) {
    db.Food.findAll({}).then(function (data) {
      var foodArr = [];
      for (var i = 0; i < data.length; i++) {
        foodArr.push(data[i].dataValues)
      }

      var administrator = false;

      var renderObj = {
        donation: foodArr,
        admin: administrator
      }
      console.log(renderObj)
      //loading donations page
      res.render(
        "donation",
        //load in donation object to render in handlebars
        renderObj
      );
    });
  });

  app.get("/donator", function (req, res) {

    //loading donations page
    res.render("donator", {login:true}
      //load in donation object to render in handlebars
    );
    // Render 404 page for any unmatched routes
  });

  app.get("*", function (req, res) {
    res.render("404");
  });

};

// db.Food.create({
//   donator: "donator",
//   food: "Cheese",
//   size: "L",
//   expiration: "2019-05-07",
//   donated: true
// }).then(function (dbFood) {
//   console.log(dbFood)
// });