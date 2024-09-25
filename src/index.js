const express = require('express');
const path = require('path');
const http = require('http');
const socketIo =  require(`socket.io`);

const app = express();
const server = http.createServer(app);

const io = socketIo(server);

port = 9000;

new_path = path.join(__dirname, '../public')
app.use(express.static(new_path));

io.on('connection', (socket) => {
    console.log('checkcheckcheck');
    socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
    console.log(`port is ${port}!`);
});