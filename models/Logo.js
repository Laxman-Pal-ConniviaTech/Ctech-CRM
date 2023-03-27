const {DataTypes} = require("sequelize")

const sequelize = require("../utils/database")

const Logo = sequelize.define("logo" , {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull : false
    },
    logoPath:{
        type:DataTypes.STRING,
        allowNull:false
    }
} , { paranoid: true, timestamps: true })

module.exports = Logo;