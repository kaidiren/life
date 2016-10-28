const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate: {
      isInt: true,
    },
    comment: '账户ID',
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '账户名',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '密码',
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '加密的盐'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '文本内容',
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '富文本内容'
  },
  status: {
    type: Sequelize.STRING(64),
    allowNull: false,
    defaultValue: 'normal',
    validate: {
      isIn: [['normal', 'blocked', 'deleted']],
    },
    comment: '状态',
  },
  gender: {
    type: Sequelize.STRING(64),
    allowNull: false,
    defaultValue: 'secret',
    validate: {
      isIn: [['male', 'female', 'secret']],
    },
    comment: '性别',
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
  tableName: 'account',
  indexes: [
    {
      unique: true,
      fields: ['name']
    },
    {
      unique: true,
      fields: ['mobile']
    },
    {
      unique: true,
      fields: ['email']
    }
  ]
});
