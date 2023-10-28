import { DataTypes, Model } from "sequelize";
import { sequelize as sequelizeConnection } from "../database/Connection";

export class Statushorta extends Model {
  declare temperaturaSolo: number;
  declare umidadeAtmosfera: number;
  declare umidadeSolo: number;
  declare phSolo: number;
  declare condutividadeEletricaSolo: number;
  declare luminosidade: number;
  declare dataleitura: Date;
}

Statushorta.init(
  {
    temperaturaSolo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    temperaturaAmbiente: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    umidadeAtmosfera: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    umidadeSolo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    phSolo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    condutividadeEletricaSolo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    luminosidade: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    dataLeitura: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "Statushorta", // <- adicionado o nome do modelo aqui
    tableName: "Statushorta", // <- adicionado o nome da tabela aqui
  }
);
