// This file creates a server for API listeneing on localhost:3000\
const http = require('http');
const app = require('./app');
const port = 3000;

// Parameter of http.createServer() is the middleware that is going to handle
//the requests
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}..!!`);
});