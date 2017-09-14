var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hacktivpress-adnin',(err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', users);
app.use('/api/articles', articles);

module.exports = app;
