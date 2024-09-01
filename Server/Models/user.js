const {DataTypes} = require('sequelize')
const database = require('../config/database')

const User = database.define("users",{
    user_id:{
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
    useRole:{
        type: DataTypes.STRING,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = User;