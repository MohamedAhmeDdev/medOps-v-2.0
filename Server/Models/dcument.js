const {DataTypes} = require('sequelize')
const database = require('../config/database')

const Document = database.define("documents",{
    document_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    document_name:{
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


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Document;