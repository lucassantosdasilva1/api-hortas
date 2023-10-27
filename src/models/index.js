'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const IP_BANCO = process.env.IP_BANCO;
const NOME_BANCO = process.env.NOME_BANCO;
const USUARIO_BANCO = process.env.USUARIO_BANCO;
const SENHA_BANCO = process.env.SENHA_BANCO;
const PORTA_BANCO = process.env.PORTA_BANCO;

  export const sequelize = new Sequelize(
    NOME_BANCO,
    USUARIO_BANCO,
    SENHA_BANCO,
    {
      host: IP_BANCO,
      port: Number(PORTA_BANCO),
      dialect: "postgres",
    }
  );

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
