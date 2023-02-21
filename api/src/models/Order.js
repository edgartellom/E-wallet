const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.DECIMAL(8, 2),
      },
      currency: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      payment_method: {
        type: DataTypes.STRING,
      },
      confirm: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
