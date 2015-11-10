var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');

var app = express();

function compile(str, path) 
{
  return stylus(str)
    .set('filename', path)
    .use(nib())
    .import('nib')
}


    app.use(require('stylus').middleware({
        src: __dirname + '/views',
        dest: __dirname + '/public',
        compile : compile
    }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.set('port',3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/login',login);
app.listen(app.get('port'));
console.log('Express server listening on port %d in mode %s',app.get('port'),app.settings.env);