const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.INTEGER,
    },
    compname: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.STRING,
    },
    pincode: {
      type: DataTypes.INTEGER,
    },
    roleId: {
      type: DataTypes.TINYINT,
    },
    ban : {
      type : DataTypes.TINYINT,
      default : 0
    },
    deletedAt: {
      field: "deleted_at",
      type: DataTypes.DATE,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
  },
  { paranoid: true, timestamps: true }
);

module.exports = User;
