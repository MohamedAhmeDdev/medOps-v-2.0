const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const User = require('./userModel')

const Notification = database.define("notifications",{
    notification_id:{
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
    subject:{
        type: DataTypes.STRING,
    },
    message:{
        type: DataTypes.STRING,
    }
},
{
    freezeTableName: true,
    timestamps: true,
}
);

// User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Notification;