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
    cust_uni_id :{
      type:DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_1: {
      type: DataTypes.BIGINT,
      allowNull : false
    },
    phone_2: {
      type: DataTypes.STRING,
    },
    phone_3: {
      type: DataTypes.STRING,
    },
    phone_4: {
      type: DataTypes.STRING,
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
