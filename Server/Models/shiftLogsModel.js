const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')
const User = require('./userModel')

const Shift = database.define("shifts",{
    shift_id:{
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
    shift_status:{
        type: DataTypes.STRING,
    },//LOGGED IN , LOGGED OUT
    start_time:{
        type: DataTypes.TIME,
    },
    end_time:{
        type: DataTypes.TIME,
    },
    Date:{
        type: DataTypes.DATE,
    }
},
{
    freezeTableName: true,
    timestamps: true,
}
);


Shift.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Shift, { foreignKey: 'user_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Shift;