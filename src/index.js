const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

server.listen(process.env.PORT || config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

const { addUser, removeUser, getUser, getUsersInRoom } = require('./modals/chatUsers');

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    socket.disconnect();
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    console.log("User " + user.name + " sent message : " + message);
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});
