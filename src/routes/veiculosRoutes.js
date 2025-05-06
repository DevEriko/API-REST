import express from "express";
import VeiculoController from "../controllers/veiculoController.js";

const routes = express.Router();

routes.get("/veiculos", VeiculoController.listarVeiculos);

export default routes;
