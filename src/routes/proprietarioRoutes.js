import express from "express";
import ProprietarioController from "../controllers/proprietarioController.js";

const routes = express.Router();

routes.get("/proprietarios", ProprietarioController.listarProprietarios);
routes.get(
  "/proprietarios/:id",
  ProprietarioController.listarProprietarioPorId
);
routes.post("/proprietarios", ProprietarioController.cadastrarProprietario);
routes.put("/proprietarios/:id", ProprietarioController.atualizarProprietario);
routes.delete("/proprietarios/:id", ProprietarioController.deletarProprietario);

export default routes;
