import express from "express";
import veiculo from "./veiculosRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Bem vindo ao meu servidor!"));

  app.use(express.json(), veiculo);
};

export default routes;
