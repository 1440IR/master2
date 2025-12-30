const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();

const wss = new WebSocket.Server({
  server,
  path: "/mario"
});

wss.on("connection", ws => {
  console.log("Client connected");

  ws.on("message", msg => {
    w
