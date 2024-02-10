'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apikey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  apikey.init({
    userId: DataTypes.STRING,
    typeUser: DataTypes.STRING,
    token: DataTypes.STRING,
    init: DataTypes.DATE,
    exp: DataTypes.DATE,
    statut: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'apikey',
  });
  return apikey;
};