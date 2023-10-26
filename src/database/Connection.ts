import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { IP_BANCO, NOME_BANCO, USUARIO_BANCO, SENHA_BANCO, PORTA_BANCO } =
  process.env;

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
