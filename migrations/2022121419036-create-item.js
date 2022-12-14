'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boothId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Booths',
          key: 'id'
        }
      },
      itemName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      cuisine: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      allergy_friendly: {
        type: Sequelize.STRING
      },
      kid_friendly: {
        type: Sequelize.BOOLEAN
      },
      contains_alcohol: {
        type: Sequelize.BOOLEAN
      },
      photo: {
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
    await queryInterface.dropTable('Items');
  }
};