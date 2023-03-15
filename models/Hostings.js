const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Hostings =  sequelize.define("hosting" , {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull : false
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue: 1,

    },
    hosting_name:{
        type:DataTypes.STRING,
        allowNull : false
    },
    booked_from:{
        type:DataTypes.STRING,
        allowNull : false
    },
    hosting_mailId:{
        type:DataTypes.STRING,
        allowNull : false
    },
    hosting_password:{
        type:DataTypes.STRING,
        allowNull : false
    },
    hosting_pin:{
        type:DataTypes.STRING,
        allowNull : false
    },
    registration_Date:{
        type:DataTypes.DATE,
        allowNull : false
    },
    expire_date:{
        type:DataTypes.DATE,
        allowNull : false
    },
    remark:{
        type:DataTypes.STRING,
        allowNull : false
    },
    hosting_amount:{
        type:DataTypes.STRING,
        allowNull : false
    },
    hosting_provider:{
        type:DataTypes.STRING,
        allowNull : false
    }


},{ paranoid: true ,timestamps: true })

module.exports = Hostings