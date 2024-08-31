const sequelize = require('sequelize')

const database = new sequelize('MedOps', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = database