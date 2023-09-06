const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const User = require('./userModel')

const Order = database.define("orders",{
    order_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },  
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        }
    },
    total_price:{
        type: DataTypes.INTEGER,
    },
    order_status:{
        type: DataTypes.STRING,
    },//PENDING , PACKED , DELIVERED
    order_date:{
        type: DataTypes.DATE,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);

Order.belongsTo(User, { foreignKey: 'user_id' });


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Order;