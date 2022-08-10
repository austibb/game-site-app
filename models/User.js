// requiring sequelize and bcrypt
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
// requiring our connection
const sequelize = require("./../config/connection");

class User extends Model {}

// creating the user model
User.init(
	{
		// user has a unique ID which servers as their primary key
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		// username must be a string, and cannot be null
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
			},
		},
		// password must be at least 8 characters, a string, and cannot be null
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
				len: [8],
			},
		},
		gamesPlayed: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
			},
		},
		wins: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: true,
			},
		},
	},
	{
		// creating hooks for the users
		sequelize,
		modelName: "users",
		hooks: {
			// before creating a user, we will create the hashed password using bcrypt
			beforeCreate: async (user) => {
				try {
					// create the password here
					const hashedPassword = await bcrypt.hash(user.password, 8);
					// set the user.password to the hashedPassword
					user.password = hashedPassword;
					return user;
				} catch (error) {
					console.error(error);
				}
			},
			// before updating a user
			beforeUpdate: async (user) => {
				// if the password length is greater than 0 when trimmed
				if (user.password.trim().length > 0) {
					try {
						// create the hashed password
						const hashedPassword = await bcrypt.hash(user.password, 8);
						// and set the user.password to the hashedPassword
						user.password = hashedPassword;
						return user;
					} catch (error) {
						console.error(error);
					}
				}
			},
		},
	}
);

module.exports = User;
