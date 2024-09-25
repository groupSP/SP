// js/client.js
const socket = io();  // Initialize Socket.IO client on the browser side

socket.on('connect', () => {
    console.log('Connected to the server');
});

// Listen for messages from the server
socket.on('message', (msg) => {
    console.log('Message from server:', msg);
});

// You can also send messages to the server, like this:
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.elements.msg.value;
    socket.emit('message', message);
    e.target.elements.msg.value = '';
});
