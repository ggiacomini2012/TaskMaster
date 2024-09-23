const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  due_date: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'tasks',
});

module.exports = Task;
