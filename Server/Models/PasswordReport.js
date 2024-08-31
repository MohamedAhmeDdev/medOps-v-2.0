const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Staff = require('./staff')

const PasswordReport = database.define("passwordReports",{
    request_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    staff_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Staff,
        key: 'staff_id'
      }
    },
    approver: {
      type: DataTypes.STRING,
    },
    reason: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
},
{
  freezeTableName: true,
  timestamps: true
});
  

PasswordReport.belongsTo(Staff, { foreignKey: 'staff_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});


module.exports = PasswordReport;