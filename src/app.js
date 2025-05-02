import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Criando a minha primeira API com Node.js");
});

export default app;
