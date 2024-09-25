const express = require('express');
const path = require('path');
const http = require('http');
const socketi =  require(`socket.io`);

const app = express();
const server = http.createServer(app);

const io = socketi(server);

port = 9000;

app.use(express.static(__dirname));

io.on(`connection`, (socket) => {
    console.log('checkcheckcheck');
});

server.listen(port, () => {
    console.log(`port is ${port}!`);
});