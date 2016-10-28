const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('theme', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate: {
      isInt: true,
    },
    comment: '主题ID',
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '账户名',
  },
  created_at: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: Math.floor(new Date() / 1000),
    validate: {
      isInt: true,
    },
    comment: '创建时间',
  },
  updated_at: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: Math.floor(new Date() / 1000),
    validate: {
      isInt: true,
    },
    comment: '修改时间',
  },
  deleted_at : {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: null,
    validate: {
      isInt: true,
    },
    comment: '删除时间'
  }
}, {
  freezeTableName: true, // 禁止修改表名
  timestamps: false, // 禁止自动增加时间戳
  underscored: true, // 下划线模式
  tableName: 'theme',
});
