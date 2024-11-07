const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('seqtest', 'root', '26340521', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    DataTypes: DataTypes
}