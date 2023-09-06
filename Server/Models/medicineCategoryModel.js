const {DataTypes} = require('sequelize')
const database = require('../config/warehouseDB')


const MedicineCategory = database.define("medicineCategories",{
    medicine_category_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    medicine_category:{
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

module.exports = MedicineCategory;