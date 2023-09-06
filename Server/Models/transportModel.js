const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const User = require('./userModel')

const Transport = database.define("transports",{
    transport_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    truck_number:{
        type: DataTypes.STRING,
    },
    status:{
        type: DataTypes.STRING,
    },
    driver_license_number:{
        type: DataTypes.INTEGER,
    },  
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        }
    },//AVAILABLE, Not AVAILABLE
},
{
    freezeTableName: true,
    timestamps: true,
}
);


Transport.belongsTo(User, { foreignKey: 'user_id' });


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Transport;