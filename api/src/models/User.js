const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
