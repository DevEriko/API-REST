import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Minha Primeira API",
  "/contatos": "Entrei na rota de contatos",
  "/usuarios": "Entrei na rota de usuarios",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("Servidor Escutando!");
});
