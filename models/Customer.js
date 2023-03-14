const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Customer = sequelize.define(
  "customer",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.BIGINT,
    },
    comp_name: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.TINYINT,
      defaultValue: 2,
    },
    ban : {
      type : DataTypes.TINYINT,
      defaultValue: 0,
    }
  },
  { paranoid: true, timestamps: true }
);

module.exports = Customer;
