'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      statut: {
        type: Sequelize.STRING
      },
      enable: {
        type: Sequelize.INTEGER
      },
      delete: {
        type: Sequelize.INTEGER
      },
      point: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operateurs');
  }
};