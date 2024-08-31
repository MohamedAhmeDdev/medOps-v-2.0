const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Medicine = require('./medicine')
const Order = require('./order')

const OrderList = database.define("orderLists",{
    order_list_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },  
    order_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'order_id',
        }
    },
    medicine_id:{
        type: DataTypes.INTEGER,
        references: {
         model: Medicine,
         key: 'medicine_id',
        },
    },
    quantity:{
        type: DataTypes.INTEGER,
    },
    price:{
        type: DataTypes.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);

OrderList.belongsTo(Medicine, { foreignKey: 'medicine_id' });
Order.hasMany(OrderList, { foreignKey: 'order_id' });


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = OrderList;