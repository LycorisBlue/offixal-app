'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Facture.init({
    request_id: DataTypes.STRING,
    invoice_number: DataTypes.STRING,
    invoice_date: DataTypes.DATE,
    client_id: DataTypes.STRING,
    operateur_id: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    invoice_description: DataTypes.TEXT,
    taxe: DataTypes.FLOAT,
    invoice_state: DataTypes.STRING,
    due_date: DataTypes.DATE,
    method_of_payment: DataTypes.STRING,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Facture',
  });
  return Facture;
};