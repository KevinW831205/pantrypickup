var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Food.findAll({}).then(function (data) {
      var hdbrsObj = {
        donations: data
      };
      res.render("index", hdbrsObj);
    });
  });

  app.get("/donation", function (req, res) {
    db.Food.findAll({
      include: [db.User]
    }).then(function (data) {
      var foodArr = [];
      for (var i = 0; i < data.length; i++) {
        foodArr.push(data[i].dataValues)
      }

      var administrator = false;

      var renderObj = {
        donation: foodArr,
        admin: administrator
      }

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
    res.render("donator", { login: false }
      //load in donation object to render in handlebars
    );
    // Render 404 page for any unmatched routes
  });

  app.get("/donator/login/:id", function (req, res) {

    db.User.findOne({
      where: { id: req.params.id }
    }).then(function (userDB) {

      res.render("donator", {
        user: userDB.dataValues,
        login: true
      })
    })

  });

  app.get("*", function (req, res) {
    res.render("404");
  });

};


// // Temporary seeding
// db.Food.create({
//   donator: "donator",
//   food: "Cheese",
//   size: "L",
//   expiration: "2019-05-07",
//   donated: true
// }).then(function (dbFood) {
//   console.log(dbFood)
// });