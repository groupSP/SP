const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);  // Initialize Socket.IO on the server

const port = 9000;

// Serve static files from the 'public' directory
const new_path = path.join(__dirname, 'public');
app.use(express.static(new_path));

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
