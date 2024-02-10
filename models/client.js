'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  client.init({
    uid: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    numero: DataTypes.STRING,
    password: DataTypes.STRING,
    statut: DataTypes.STRING,
    enable: DataTypes.INTEGER,
    delete: DataTypes.STRING,
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'client',
  });
  return client;
};