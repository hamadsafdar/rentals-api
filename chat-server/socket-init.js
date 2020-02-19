const socketIo = require('socket.io');




module.exports.initialize = (server) => {

    const serverSocket = socketIo(server);

    serverSocket.on('connection', (socket) => {
       








        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnected!!`);
        });
    });

}
