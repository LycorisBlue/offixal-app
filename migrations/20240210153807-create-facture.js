'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Factures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      invoice_number: {
        type: Sequelize.STRING
      },
      invoice_date: {
        type: Sequelize.DATE
      },
      client_id: {
        type: Sequelize.STRING
      },
      operateur_id: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      },
      invoice_description: {
        type: Sequelize.TEXT
      },
      taxe: {
        type: Sequelize.FLOAT
      },
      invoice_state: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.DATE
      },
      method_of_payment: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Factures');
  }
};