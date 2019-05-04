module.exports = function (sequelize, DataTypes) {

  var Food = sequelize.define("Food", {
    donator: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    expiration: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    donated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Food;
};