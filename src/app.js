import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conectado ao banco de dados");
});

const app = express();
routes(app);

app.get("/veiculos/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  res.status(200).json(carros[index]);
});

app.post("/veiculos", (req, res) => {
  carros.push(req.body);
  res.status(201).send("Carro cadastrado com sucesso!");
});

app.put("/veiculos/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  carros[index].marca = req.body.marca;
  carros[index].modelo = req.body.modelo;
  carros[index].ano = req.body.ano;
  res.status(200).json(carros);
});

app.delete("/veiculos/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  carros.splice(index, 1);
  res.status(200).send("Carro removido com sucesso!");
});

export default app;
