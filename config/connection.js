require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME, 
      process.env.DB_USER, 
      process.env.DB_PASS,
    //   'Supergeil!016', 
      {
          host: 'localhost',
          dialect: 'mysql',
          port: 3306
      });

module.exports = sequelize;