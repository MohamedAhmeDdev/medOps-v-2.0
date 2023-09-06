const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')

const  warehouse = database.define("warehouses",{
    warehouse_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    warehouse_name:{
        type: DataTypes.STRING,
    },
    warehouse_address:{
        type: DataTypes.STRING,
    },
    manager:{
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

module.exports =  warehouse;