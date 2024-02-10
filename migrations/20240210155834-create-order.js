'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      operateur_id: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.STRING
      },
      place_of_care: {
        type: Sequelize.STRING
      },
      place_of_delivery: {
        type: Sequelize.STRING
      },
      order_status: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      delete: {
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
    await queryInterface.dropTable('Orders');
  }
};