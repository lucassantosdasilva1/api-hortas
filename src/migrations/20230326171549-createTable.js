"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("Statushorta", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      temperaturaSolo: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      umidadeAtmosfera: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      umidadeSolo: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      phSolo: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      condutividadeEletricaSolo: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      luminosidade: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      dataLeitura: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("Statushorta");
  },
};
