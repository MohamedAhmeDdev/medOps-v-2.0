const {DataTypes} = require('sequelize')
const database = require('../config/database')
const User = require('./user')
const Role = require('./roles')

const staff = database.define("staffs",{
    staff_id:{
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
    role_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'role_id',
        }
    },
    account_status:{
        type: DataTypes.STRING,
    }
},
{
    freezeTableName: true,
    timestamps: true,
}
);

User.hasMany(staff, { foreignKey: 'user_id' });
staff.belongsTo(Role, { foreignKey: 'role_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = staff;