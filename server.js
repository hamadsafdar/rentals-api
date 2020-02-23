// This file creates a server for API listeneing on localhost:3000\
const http = require('http');
const app = require('./app');
const socketInit = require('./chat-server/socket-init')
const port = 3000;



// Parameter of http.createServer() is the middleware that is going to handle
//  the requests
const server = http.createServer(app);


socketInit.initialize(server);
server.listen(port, () => {
    console.log(`Server is listening on port ${port}..!!`);
});


