const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')


const Supplier = database.define("suppliers",{
    supplier_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    company_name:{
        type: DataTypes.STRING,
    }, 
    contact_person:{
        type: DataTypes.STRING,
    }, 
    email:{
        type: DataTypes.STRING,
    }, 
    phone:{
        type: DataTypes.INTEGER,
    }, 
    company_address:{
        type: DataTypes.STRING,
    }, 
},
{
    freezeTableName: true,
    timestamps: true,
}
);




database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Supplier;