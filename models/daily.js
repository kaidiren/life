const Sequelize = require('sequelize');
const sequelize = require('../lib/sequelize');

module.exports = sequelize.define('daliy', {
  account_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    validate: {
      isInt: true,
    },
    comment: '账户ID',
  },
  daily_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate: {
      isInt: true,
    },
    comment: '账户ID',
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    comment: '文本内容',
  },
  status: {
    type: Sequelize.STRING(64),
    allowNull: false,
    defaultValue: 'normal',
    validate: {
      isIn: [['normal', 'freeze', 'deleted']],
    },
    comment: '状态',
  },
  visible: {
    type: Sequelize.STRING(64),
    allowNull: false,
    defaultValue: 'public',
    validate: {
      isIn: [['pubilc', 'private']],
    },
    comment: '可见',
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
  },
  tags: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: '[]',
    comment: '标签',
  },
}, {
  freezeTableName: true, // 禁止修改表名
  timestamps: false, // 禁止自动增加时间戳
  underscored: true, // 下划线模式
  tableName: 'daily',
});
