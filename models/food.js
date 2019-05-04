module.exports = function (sequelize, DataTypes) {

  var Food = sequelize.define("Food", {
    donator: DataTypes.String,
    food: DataTypes.STRING,
    size: DataTypes.TEXT,
    expiration: DataTypes.DATEONLY,
    donated: DataTypes.BOOLEAN
  });

  return Food;
};
