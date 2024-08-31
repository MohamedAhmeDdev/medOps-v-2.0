const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Role = require('./staff')

const Shift = database.define("shifts",{
    shift_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'role_id',
        }
    },
    shift_status:{
        type: DataTypes.STRING,
    },
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


Shift.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Shift, { foreignKey: 'role_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Shift;