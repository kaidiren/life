const config = require('../config');
const Sequelize = require('sequelize');

const life = config.sqlite.life;
const sequelize = new Sequelize(life.database, '', '', {
  dialect: 'sqlite',
  pool: {
    max: 10,
    min: 0,
    idle: 3000,
  },
  storage: life.storage
});

if (!config.dev_mode) {
  sequelize.options.logging = function() {};
}

module.exports = sequelize;
