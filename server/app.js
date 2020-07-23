const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000
const cors = require('cors')

let rooms = []

app.use(cors())

io.on('connection', socket => { 
    socket.on('login', (data) => {
      socket.emit('list-rooms', rooms)
    })
    socket.on('create-room', data => {
        let room = {
            name: data['room-name'],
            users: [],
            admin: data.admin
        }
        rooms.push(room)
        io.emit('updated-room', rooms)
    })
    socket.on('join-room', data => {
        socket.join(data['room-name'], () => {
            let index = rooms.findIndex((item) => item.name == data['room-name'])
            rooms[index].users.push(data.username)
            io.sockets.in(data['room-name']).emit('room-detail',rooms[index])
            console.log(rooms)
        })
    })
    socket.on('start-game', data => {
        socket.broadcast.to(data).emit('start-game')
    })
});

server.listen(port, () => console.log(`running on port ${port}`));