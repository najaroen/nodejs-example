const Sequelize = require('sequelize');

const sequelize = require('../util/database-sequelize');

const shop = sequelize.define('shops', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    shopName: {
        type:Sequelize.STRING,
        allowNull:false
    },
    shopImgUrl: {
        type:Sequelize.STRING,
        allowNull:false
    },
    shopDescription: {
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = shop