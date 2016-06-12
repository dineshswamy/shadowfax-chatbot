var express = require('express');
var reload = require('reload');
var http = require('http');
var querystring = require('querystring');
var url = require('url');
var app = express();
app.use(express.static('public'));
//app.use(logger('dev'));



app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

//app.use(bodyParser.json());
//Server
var server = app.listen(process.env.PORT || 2000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Compression app listening at http://%s:%s", host, port)
});

reload(server, app);


