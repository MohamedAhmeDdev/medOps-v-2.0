const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Role = require('./roles')

const staff = database.define("staffs",{
    staff_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    phoneNumber:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },  
    address:{
        type: DataTypes.STRING,
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


staff.belongsTo(Role, { foreignKey: 'role_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = staff;