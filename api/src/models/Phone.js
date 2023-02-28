const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "phone",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
      },
      network: {
        type: DataTypes.STRING,
      },
      launch: {
        type: DataTypes.STRING,
      },
      dimensions: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.DECIMAL(4, 1),
      },
      displayType: {
        type: DataTypes.STRING,
      },
      displaySize: {
        type: DataTypes.STRING,
      },
      displayResolution: {
        type: DataTypes.STRING,
      },
      os: {
        type: DataTypes.STRING,
      },
      ram: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      internMemory: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      chipset: {
        type: DataTypes.STRING,
      },
      cpu: {
        type: DataTypes.STRING,
      },
      selfieCameraResolution: {
        type: DataTypes.STRING,
      },
      selfieCameraVideo: {
        type: DataTypes.STRING,
      },
      mainCameraResolution: {
        type: DataTypes.STRING,
      },
      mainCameraVideo: {
        type: DataTypes.STRING,
      },
      battery: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 10000,
        },
      },
      price: {
        type: DataTypes.DECIMAL(8, 2),
      },
      color: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdInDb: {
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
