// This file is creates the

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const db = require('./database');

// Requiring routes

const userRoutes = require('./routes/user-routes');
const postRoutes = require('./routes/post-routes');
const blogRoutes = require('./routes/blog-routes');
const forumRoutes = require('./routes/discussion-routes');
const searchRoutes = require('./routes/search-routes');


app.use(express.static('./public'));

//connecting to db
db.connect();


// Dev Dependency

app.use(morgan('dev'));

// Other middlewares
app.use(session({
    //options for session
    secret: 'mango_people',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60,
        path: '/'
    },
    store: new MongoStore({
        //option for session store
        mongooseConnection: mongoose.connection,
        ttl: 7 * 24 * 60 * 60
    })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handling routes 

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/search', searchRoutes);



module.exports = app;
