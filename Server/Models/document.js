const {DataTypes} = require('sequelize')
const database = require('../config/database')
const Staff = require('./staff')

const Document = database.define("documents",{
    document_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    staff_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Staff,
            key: 'staff_id',
        }
    },
    Batch_no:{
        type: DataTypes.STRING,
    },
    document_url:{
        type: DataTypes.STRING,
    },
    uploaded_date:{
        type: DataTypes.DATE,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);


Document.belongsTo(Staff, { foreignKey: 'staff_id' });

database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Document;