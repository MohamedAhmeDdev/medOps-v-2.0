const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Role = require('./staff')

const Transport = database.define("transports",{
    transport_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    truck_number:{
        type: DataTypes.STRING,
    },
    driver_license_number:{
        type: DataTypes.INTEGER,
    },  
    staff_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'staff_id',
        }
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);


Transport.belongsTo(Role, { foreignKey: 'staff_id' });


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Transport;