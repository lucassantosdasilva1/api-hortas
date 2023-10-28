import { Request, Response } from "express";
import { Statushorta } from "../models/Statushorta";
import { INewStatusHorta } from "./@types";

export class LeituraController {
  //Criar novo produto
  async create(req: Request<{}, {}, INewStatusHorta>, res: Response) {
    const {
      temperaturaSolo,
      temperaturaAmbiente,
      umidadeAtmosfera,
      umidadeSolo,
      phSolo,
      condutividadeEletricaSolo,
      luminosidade,
    } = req.body;

    try {
      const status = await Statushorta.create({
        temperaturaSolo,
        temperaturaAmbiente,
        umidadeAtmosfera,
        umidadeSolo,
        phSolo,
        condutividadeEletricaSolo,
        luminosidade,
        dataLeitura: new Date(),
      });

      return res.json(status);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
    // const transaction = new Transaction();

    // transaction.name = name;
    // transaction.amount = amount;
    // transaction.category = category;
    // transaction.type = type;
    // transaction.createdAt = new Date();
    // transaction.updatedAt = new Date();

    // await transaction.save();

    // return res.json(transaction);
  }

  //Listar Produtos
  async list(req: Request, res: Response) {
    try {
      const status = await Statushorta.findAll().then((status) => {
        return status;
      });
      console.log(status);

      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Atualiza produtobyID
  // async update(req: Request, res: Response) {
  //   const idReq = req.params.id;

  //   const statusexists = await Statushorta.findByPk(idReq);
  //   if (!statusexists) {
  //     res.status(422).json({ message: "Leitura não encontrada!" });
  //     return;
  //   }

  //   try {
  //     console.log(req.body);

  //     await Statushorta.update(
  //       {
  //         name: req.body.name,
  //         amount: req.body.amount,
  //         category: req.body.category,
  //         type: req.body.type,
  //         updatedAt: new Date(),
  //       },
  //       {
  //         where: {
  //           id: idReq,
  //         },
  //       }
  //     );

  //     res.status(200).json({ message: "Transação alterada com sucesso!" });
  //   } catch (error) {
  //     res.status(500).json({ erro: error });
  //   }
  // }

  //Apagar ProdutobyID
  async delete(req: Request, res: Response) {
    const idReq = req.params.id;

    console.log("idreq: ", idReq);

    const statusexists = await Statushorta.findByPk(idReq);

    if (!statusexists) {
      res.status(422).json({ message: "Leitura não encontrada!" });
      return;
    }

    try {
      await Statushorta.destroy({
        where: {
          id: idReq,
        },
      });

      res.status(200).json({ message: "Leitura removida com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: error });
    }
  }

  //Lista ByID
  async listById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const status = await Statushorta.findByPk(id);

      res.status(200).json(status);
    } catch (error) {}
  }
}
