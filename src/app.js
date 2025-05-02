import express from "express";

const app = express();

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

app.get("/", (req, res) => {
  res.status(200).send("Criando a minha primeira API com Node.js");
});

app.get("/carros", (req, res) => {
  res.status(200).json(carros);
});

export default app;
