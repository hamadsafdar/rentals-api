// This file is creates the

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// Requiring routes

const userRoutes = require('./routes/user-routes');
const postRoutes = require('./routes/post-routes');

// Dev Dependency

app.use(morgan('dev'));

// Other middlewares

app.use(bodyParser.json());

// Handling routes 

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);



module.exports = app;
