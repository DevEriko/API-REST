import express from "express";
import veiculo from "./veiculosRoutes.js";
import proprietario from "./proprietarioRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Bem vindo ao meu servidor!"));

  app.use(express.json(), veiculo, proprietario);
};

export default routes;
