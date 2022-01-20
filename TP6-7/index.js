const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const validator = require('express-joi-validator').createValidator({});
const app = express();


// Import handlers & modules
const userRoutes = require('./routes/user.routes')(app, Joi, validator);
const postsRoutes = require('./routes/posts.routes')(app, Joi, validator);
const authRoutes = require('./routes/auth.routes')(app, Joi, validator);
const rolesRoutes = require('./routes/roles.routes')(app, Joi, validator);
const commentsRoutes = require('./routes/comments.routes')(app, Joi, validator);

const { correctionTp1 } = require('./handlers/main.handler');

const afficherDate = (req, res, next) => {
    console.log(new Date(Date.now()));
    next();
};

const ajoutHeader = (req, res, next) => {
    res.set({ "Application-name": "ecv-digital" });
    next();
};

const missingAuth = (req, res, next) => {
    if (!req.headers["Authorization"]) {
        res.status(403).send();
    }
    next();
};

const userHeader = (req, res, next) => {
    res.set({ "App-Context": "Users" });

    next();
};

const postsHeader = (req, res, next) => {
    res.set({ "App-Context": "Posts" });
    next();
};

const commentHeader = (req, res, next) => {
    res.set({ "App-Context": "Comment" });

    next();
};
const protectedRoute = require('./middlewares/auth');

const errorHandler = require('./middlewares/error-handler.middleware');
const joiErrorHandler = require('./middlewares/joi-error-handler.middleware');

require('dotenv').config();

// Import libs
app.use(bodyParser.json());

// Routes
app.get('/correction-tp1', correctionTp1);


app.get('/error', (req, res) => {
    throw new Error('ça marche pas');
})

app.use(afficherDate);
app.use(ajoutHeader);
app.use(missingAuth);
app.use(userHeader);
app.use(postsHeader);
app.use(commentHeader);
app.use('/users', userRoutes);
app.use('/posts', postsRoutes);
app.use('/roles', rolesRoutes);
app.use('/comments', commentsRoutes);

app.use(joiErrorHandler);
app.use(errorHandler);

//app.use('/auth', authRoutes);

// Run app
app.listen(3000);