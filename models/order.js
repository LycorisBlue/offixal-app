'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    client_id: DataTypes.INTEGER,
    operateur_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    notes: DataTypes.STRING,
    place_of_care: DataTypes.STRING,
    place_of_delivery: DataTypes.STRING,
    order_status: DataTypes.STRING,
    contact: DataTypes.STRING,
    delete: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};