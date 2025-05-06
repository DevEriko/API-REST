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

app.delete("/veiculos/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  carros.splice(index, 1);
  res.status(200).send("Carro removido com sucesso!");
});

export default app;
