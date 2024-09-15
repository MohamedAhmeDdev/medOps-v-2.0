const sequelize = require('sequelize')
const {DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_DIALECT, } = require("../constant");


const database = new sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
  });
    

module.exports = database