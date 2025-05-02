import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Welcome to my API - Node.js");
});

server.listen(PORT, () => {
  console.log("Servidor Escutando!");
});
