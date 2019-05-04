module.exports = function (sequelize, DataTypes) {

	var Admin = sequelize.define("Admin", {
		pantry_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});
	return Admin;
};