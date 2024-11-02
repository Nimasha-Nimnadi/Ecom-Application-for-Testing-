// models/Cart.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Product = require('./Product');
const User = require('./User');

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// Define associations
Cart.belongsTo(Product); // Each cart item is related to a single product
Cart.belongsTo(User); // Each cart item is associated with a single user

module.exports = Cart;
