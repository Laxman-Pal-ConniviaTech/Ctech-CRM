const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Domains =  sequelize.define("domain" , {
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
    domain_name:{
        type:DataTypes.STRING,
        allowNull : false
    },
    booked_from:{
        type:DataTypes.STRING,
        allowNull : false
    },
    doamin_mailId:{
        type:DataTypes.STRING,
        allowNull : false
    },
    domain_password:{
        type:DataTypes.STRING,
        allowNull : false
    },
    domain_pin:{
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
    domain_amount:{
        type:DataTypes.STRING,
        allowNull : false
    },
    hosting_provider:{
        type:DataTypes.STRING,
        allowNull : false
    }


},{ paranoid: true ,timestamps: true })

module.exports = Domains