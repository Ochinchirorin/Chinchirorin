const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000
const cors = require('cors')
const { roll, compare, rollStorm } = require('./helper/index')

let rooms = [], dataRoll = [], dataRollObj = [], datap1 = [], datap2 = []

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
            if (rooms[index].users.length === 2) {
                socket.emit('errorFull', data)
                io.emit('updated-room', rooms)
            } else {
                rooms[index].users.push(data.username)
                io.sockets.in(data['room-name']).emit('room-detail', rooms[index])
                console.log(rooms)
            }
        })
    })
    socket.on('start-game', data => {
        socket.broadcast.to(data.name).emit('start-game',data)
        // socket.broadcast.to(data.name).emit('start-game',data)
    })
    socket.on('roll', (name) => {
        socket.emit('result', roll(name))
    })
    socket.on('rollStorm', (name) => {
        socket.emit('result', rollStorm(name))
    })

    socket.on('dataRoll', payload => {
        dataRollObj.push(payload)
        dataRoll.push(payload.point)
        const playerWin = payload.winStatus
        const playerLose = payload.loseStatus

        if (playerWin) {
            io.emit('hasil', { name: payload.name, msg: "Storm-Win" })
            dataRoll = []
        } else if (playerLose) {
            io.emit('hasil', { name: payload.name, msg: "Storm-Lose" })
            dataRoll = []
        } else if (dataRoll.length === 6) {
            for (let i = 0; i < dataRoll.length; i++) {
                if (i < 3) datap1.push(dataRoll[i])
                else datap2.push(dataRoll[i])
            }


            newDatap1 = Math.max(...datap1)
            newDatap2 = Math.max(...datap2)

            for (let i = 0; i < dataRollObj.length; i++) {
                if (dataRollObj[i].point === newDatap1) {
                    newDatap1 = dataRollObj[i]
                }

                if (dataRollObj[i].point === newDatap2) {
                    newDatap2 = dataRollObj[i]
                }
            }

            io.emit('hasil', compare(newDatap1, newDatap2))
            dataRoll = []
        }
    })
});

server.listen(port, () => console.log(`running on port ${port}`));
