const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Transport = require('./transport')
const Order = require('./order')

const Delivery = database.define("deliveries",{
    delivery_id:{
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
    transport_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Transport,
            key: 'transport_id',
           },
    },
    delivery_date:{
        type: DataTypes.DATE,
    },
    delivery_status:{
        type: DataTypes.STRING,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);

Delivery.belongsTo(Order, { foreignKey: 'order_id' });
Delivery.belongsTo(Transport, { foreignKey: 'transport_id' });


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Delivery;