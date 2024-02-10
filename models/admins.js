'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admins.init({
    uid: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    statut: DataTypes.STRING,
    enable: DataTypes.INTEGER,
    delete: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admins',
  });
  return admins;
};