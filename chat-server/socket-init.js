const socketIo = require('socket.io');




module.exports.initialize = (server) => {

    const serverSocket = socketIo(server);

    serverSocket.on('connection', (socket) => {

        console.log('A new Connection!!');

        const msg = {
            messageFrom: '',
            messageTo: '',
            messageContent: ''
        };

        socket.on('new-message', (from, to, message) => {
            msg.messageFrom = from;
            msg.messageTo = to;
            msg.messageContent = message;




        });

        socket.emit('new-mesage', (from, to, message));









        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnected!!`);
        });
    });

}
