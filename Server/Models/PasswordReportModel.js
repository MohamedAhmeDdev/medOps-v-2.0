const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const User = require('./userModel')

const PasswordReport = database.define("passwordReports",{
    request_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'user_id'
      }
    },
    // approver: {
    //   type: DataTypes.STRING,
    // },
    reason: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },//PENDING , UPDATED , 
},
{
  freezeTableName: true,
  timestamps: true
});
  

PasswordReport.belongsTo(User, { foreignKey: 'user_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});


module.exports = PasswordReport;