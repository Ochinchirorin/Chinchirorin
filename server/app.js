const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const roll = require("./helper/index");
const cors = require("cors");

app.use(cors());

io.on("connect", function (socket) {
  console.log("Client connected");
  socket.emit("roll", { content: roll("Sakra") });
});

server.listen(3000, () => console.log(`Listening on port 3000`));
