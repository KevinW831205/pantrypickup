
module.exports = function (sequelize, DataTypes) {

	var User = sequelize.define("User", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50]
			}
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,10]
			}
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 50]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 10]
			}
		},
		admin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	  
	  User.associate = function(models) {
		User.hasMany(models.Food, {
		  onDelete: "cascade"
		});
	  };
	
	return User;
};
