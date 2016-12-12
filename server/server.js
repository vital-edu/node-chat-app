const path  = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.broadcast.emit('newMessage', generateMessage(
    'Admin',
    'New user joined'
  ));

  socket.emit('newMessage', generateMessage(
    'Admin',
    'Welcome to the chat app'
  ));

  socket.on('createMessage', (message) => {
    console.log('createMessage: ', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
  })

  socket.on('disconnect', (soket) => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`The server is up on port ${port}`);
})
