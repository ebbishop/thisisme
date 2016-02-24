var express = require('express');
var router = require('./routes');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));


app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + 'browser'));
app.use(express.static(__dirname + 'node_modules'));

app.use(router);

app.use(function(err, req, res, next){
  res.status = err.status || 500;
  console.error(err);
  res.send(err.message);
})

app.listen(3000, console.log('Listening on 3000'));
