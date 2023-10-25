import express from "express";
import "dotenv/config";

import { router } from "./routes";

const app = express();
app.use(express.json());

// Definindo o prefixo de rota
const baseRoute = "/api-hortas";

app.set("base", baseRoute);

// Middleware para adicionar o prefixo a todas as rotas
app.use(baseRoute, router);

app.listen(3333, () => {
  console.log("Server is running");
});
