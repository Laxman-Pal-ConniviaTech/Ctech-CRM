const {DataTypes} = require("sequelize")

const sequelize = require("../utils/database")

const Invoice = sequelize.define("invoice" , {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull : false
    },
    client_name : {
        type:DataTypes.STRING,
        allowNull:false
    },
    client_mobile : {
        type:DataTypes.STRING,
        allowNull:false
    },
     quotation_date : {
        type:DataTypes.DATEONLY,
        allowNull:true
    },
    shift_from : {
        type:DataTypes.STRING,
        allowNull:false
    },
    shift_to : {
        type:DataTypes.STRING,
        allowNull:false
    },
    transport_charge : {
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue: 0,
    },
    transport_type : {
        type:DataTypes.STRING,
        allowNull:false
    },
    packing_charges : {
        type:DataTypes.STRING,
        allowNull:false
    },
    unpacking_charges : {
        type:DataTypes.STRING,
        allowNull:false
    },
    loading_charges : {
        type:DataTypes.STRING,
        allowNull:false
    },
    unloading_charges : {
        type:DataTypes.STRING,
        allowNull:false
    },
    car_charge : {
        type:DataTypes.STRING,
        allowNull:false
    },
    warehouse_charges : {
        type:DataTypes.STRING,
        allowNull:false
    },
    st_charges : {
        type:DataTypes.STRING,
        allowNull:false
    },
    mathadi_charges  : {
        type:DataTypes.STRING,
        allowNull:false
    },
    insurance_per : {
        type:DataTypes.STRING,
        allowNull:false
    },
    Insurance_type : {
        type:DataTypes.STRING,
        allowNull:false
    },

    shifting_date : {
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    token_amt : {
        type:DataTypes.STRING,
        allowNull:false
    },
    service_charge : {
        type:DataTypes.STRING,
        allowNull:false
    },
    service_charge_type : {
        type:DataTypes.STRING,
        allowNull:false
    },
    cgst_per : {
        type:DataTypes.STRING,
        allowNull:false
    },
    cgst_num : {
        type:DataTypes.STRING,
        allowNull:false
    },
    sgst_per : {
        type:DataTypes.STRING,
        allowNull:false
    },
    sgst_num : {
        type:DataTypes.STRING,
        allowNull:false
    },
    invoice_color:{
        type:DataTypes.STRING,
    }
} , { paranoid: true, timestamps: true })

module.exports = Invoice;