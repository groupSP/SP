const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

const socket =  require(`socket.io`)
const io = socketio(server)

port = 9000;

app.use(express.static(__dirname));

server.listen(port, () => {
    console.log(`port is ${port}!`);
})