'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  operateur.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    numero: DataTypes.STRING,
    password: DataTypes.STRING,
    statut: DataTypes.STRING,
    enable: DataTypes.INTEGER,
    delete: DataTypes.INTEGER,
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'operateur',
  });
  return operateur;
};