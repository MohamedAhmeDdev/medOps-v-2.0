const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const User = require('./userModel')

const UserWarehouse = database.define("staffWarehouses",{
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        }
    },
    account_status:{
        type: DataTypes.STRING,
    }//ACTIVE ,InActive
},
{
    freezeTableName: true,
    timestamps: true,
}
);

User.hasMany(UserWarehouse, { foreignKey: 'user_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = UserWarehouse;