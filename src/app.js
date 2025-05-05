import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conectado ao banco de dados");
});

const app = express();
app.use(express.json());

const carros = [
  {
    id: 1,
    marca: "Porche",
    modelo: "Carrera 911",
    ano: 2023,
  },
  {
    id: 2,
    marca: "Porche",
    modelo: "Macan",
    ano: 2024,
  },
];

function buscarCarro(id) {
  return carros.findIndex((carro) => {
    return carro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Criando a minha primeira API com Node.js");
});

app.get("/carros", (req, res) => {
  res.status(200).json(carros);
});

app.get("/carros/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  res.status(200).json(carros[index]);
});

app.post("/carros", (req, res) => {
  carros.push(req.body);
  res.status(201).send("Carro cadastrado com sucesso!");
});

app.put("/carros/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  carros[index].marca = req.body.marca;
  carros[index].modelo = req.body.modelo;
  carros[index].ano = req.body.ano;
  res.status(200).json(carros);
});

app.delete("/carros/:id", (req, res) => {
  const index = buscarCarro(req.params.id);
  carros.splice(index, 1);
  res.status(200).send("Carro removido com sucesso!");
});

export default app;
