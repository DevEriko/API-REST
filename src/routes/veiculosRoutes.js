import express from "express";
import VeiculoController from "../controllers/veiculoController.js";

const routes = express.Router();

routes.get("/veiculos", VeiculoController.listarVeiculos);
routes.get("/veiculos/busca", VeiculoController.listarVeiculoPorProprietario);
routes.get("/veiculos/:id", VeiculoController.listarVeiculoPorId);
routes.post("/veiculos", VeiculoController.cadastrarVeiculo);
routes.put("/veiculos/:id", VeiculoController.atualizarVeiculo);
routes.delete("/veiculos/:id", VeiculoController.deletarVeiculo);

export default routes;
