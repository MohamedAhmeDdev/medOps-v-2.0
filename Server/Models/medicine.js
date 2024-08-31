const {DataTypes} = require('sequelize')
const database = require('../config/database')
const MedicineCategory = require('./medicineCategory')
const Supplier = require('./Supplier')

const Medicine = database.define("medicines",{
    medicine_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    medicine_category_id:{
        type: DataTypes.INTEGER,
        references: {
         model: MedicineCategory,
         key: 'medicine_category_id',
        },
    },
    supplier_id:{
        type: DataTypes.INTEGER,
        references: {
         model: Supplier,
         key: 'supplier_id',
        },
    },
    medicine_image:{
        type: DataTypes.STRING,
    },
    medicine_name:{
        type: DataTypes.STRING,
    },
    total_quantity:{
        type: DataTypes.INTEGER,
    },
    price:{
        type: DataTypes.INTEGER,
    },
    aisle:{
        type: DataTypes.INTEGER,
    },
},
{
    freezeTableName: true,
    timestamps: true,
}
);


Medicine.belongsTo(MedicineCategory, { foreignKey: 'medicine_category_id' });
Medicine.belongsTo(Supplier, { foreignKey: 'supplier_id' });


database.sync()
  .then(() => {
    console.log("table Synced successfully!");
  })
  .catch((error) => {
    console.log("Unable to Synced table", error);
});

module.exports = Medicine;