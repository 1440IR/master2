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
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
