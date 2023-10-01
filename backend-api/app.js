require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { errorHandler } = require('./api-v1/middleware/errorHandlerMiddleware');
const database = require('./api-v1/config/database');
const consumerRouter = require('./api-v1/routes/consumer');

// connect to database
database.connect();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log('port: ' + process.env.PORT);
app.use('/api/v1/consumer', consumerRouter);

// catch 404 and forward to error handler
app.use(errorHandler);

module.exports = app;
