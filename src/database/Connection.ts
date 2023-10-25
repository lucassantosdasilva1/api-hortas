import { Sequelize } from "sequelize";

// const { IP_BANCO, NOME_BANCO, USUARIO_BANCO, SENHA_BANCO, PORTA_BANCO } =
//   process.env;

const IP_BANCO = "localhost";
const NOME_BANCO = "hortasdb";
const USUARIO_BANCO = "lucassantos";
const SENHA_BANCO = "senhadificil";
const PORTA_BANCO = "5432";

// if (
//   !IP_BANCO ||
//   !NOME_BANCO ||
//   !USUARIO_BANCO ||
//   !SENHA_BANCO ||
//   !PORTA_BANCO
// ) {
//   throw new Error("Variáveis de ambiente não definidas");
// }

export const sequelize = new Sequelize(
  NOME_BANCO!,
  USUARIO_BANCO!,
  SENHA_BANCO,
  {
    host: IP_BANCO,
    port: Number(PORTA_BANCO)!,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
