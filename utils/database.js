const Sequelize = require("sequelize")

const sequelize = new Sequelize("c-tech crm" , "root" , "" , {
    host:"localhost",
    dialect : "mysql"
})

module.exports = sequelize;