const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const Warehouse = require('./warehouseModel')

const orderReport = database.define("ordersReports",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },  
    medicine_name:{
        type: DataTypes.STRING,
    },
    quantity_sold:{
        type: DataTypes.INTEGER,
    },
    total_sale:{
        type: DataTypes.INTEGER,
    },
    startDate:{
        type: DataTypes.DATE,
    },
    endDate:{
        type: DataTypes.DATE,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);


orderReport.belongsTo(Warehouse, { foreignKey: 'warehouse_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = orderReport;