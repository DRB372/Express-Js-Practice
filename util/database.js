const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodepractice', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
