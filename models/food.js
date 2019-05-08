module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    donator: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
    food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.DATEONLY,
    },
    donated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

  Food.associate = function(models) {
    Food.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });
  };
  
  return Food;
};


