const fs = require('fs');

module.exports = {
  development: {
    username: 'lucassantos',
    password: 'senhadificil',
    database: 'hortasdb',
    host: '172.17.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: process.env.NOME_BANCO,
    host: process.env.IP_BANCO,
    port: process.env.PORTA_BANCO,
    dialect: 'postgres',
  },
  production: {
    username: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: "hortasdb",
    host: process.env.IP_BANCO,
    port: process.env.PORTA_BANCO,
    dialect: 'postgres',
  }
};
